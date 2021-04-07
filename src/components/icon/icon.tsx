import cx from 'classnames';
import styled from 'styled-components';

import './styles.css';

const ICONS_MAP = {
  notifications_active: <>&#xe7f7;</>,
  new_releases: <>&#xe031;</>,
  library_music: <>&#xe030;</>,
  live_tv: <>&#xe639;</>,
  play_arrow: <>&#xe037;</>,
  play_circle_outline: <>&#xe039;</>,
  sports_soccer: <>&#xea2f;</>,
};

type Props = {
  name: string;
};

const Icon = styled.i.attrs<Props>(({ name, className, ...props }) => ({
  ...props,
  className: cx(`material-icons`, className),
  children: ICONS_MAP[name as keyof typeof ICONS_MAP] || name,
}))<Props>``;

export default Icon;
