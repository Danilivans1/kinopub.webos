import { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import useApiMutation from 'hooks/useApiMutation';
import useDeviceInfo from 'hooks/useDeviceInfo';
import useStorageState from 'hooks/useStorageState';
import { PATHS } from 'routes';

function useDeviceAuthorizationEffect() {
  const history = useHistory();
  const deviceInfo = useDeviceInfo();
  const { deviceAuthorizationAsync } = useApiMutation('deviceAuthorization');
  const { deviceNotify } = useApiMutation('deviceNotify');
  const [isLogged] = useStorageState<boolean>('is_logged');

  const handleOnConfirm = useCallback(
    (userCode: string, verificationUri: string) => {
      history.push(PATHS.Pair, {
        userCode,
        verificationUri,
      });
    },
    [history],
  );

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      await deviceAuthorizationAsync([deviceInfo, handleOnConfirm]);

      history.push(PATHS.Home);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isLogged, deviceInfo, history, handleOnConfirm, deviceAuthorizationAsync]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      deviceNotify([deviceInfo]);
    }, 2 * 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [deviceInfo, deviceNotify]);
}

export default useDeviceAuthorizationEffect;