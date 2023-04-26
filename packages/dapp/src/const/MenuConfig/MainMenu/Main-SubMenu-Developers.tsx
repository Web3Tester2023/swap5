import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import { useTheme } from '@mui/material/styles';
import { openInNewTab } from '@transferto/shared/src/utils/';
import { useTranslation } from 'react-i18next';
import { EventTrackingTools } from '../../../hooks';
import { useUserTracking } from '../../../hooks/useUserTracking/useUserTracking';

export const useMainSubMenuDevelopers = () => {
  const { t: translate } = useTranslation();
  const i18Path = 'navbar.';
  const { trackPageload } = useUserTracking();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return [
    {
      label: `${translate(`${i18Path}developers.github`)}`,
      prefixIcon: (
        <GitHubIcon
          sx={{
            color: !!isDarkMode
              ? theme.palette.white.main
              : theme.palette.black.main,
          }}
        />
      ),
      onClick: () => {
        openInNewTab('https://unilink.network');
        trackPageload({
          source: 'menu',
          destination: 'unilink-github',
          url: 'https://unilink.network,
          pageload: true,
          disableTrackingTool: [EventTrackingTools.arcx],
        });
      },
    },
    {
      label: `${translate(`${i18Path}developers.documentation`)}`,
      prefixIcon: <DescriptionOutlinedIcon />,
      onClick: () => {
        openInNewTab('https://unilink.network/docs');
        trackPageload({
          source: 'menu',
          destination: 'unilink-docs',
          url: 'https://unilink.network/docs',
          pageload: true,
          disableTrackingTool: [EventTrackingTools.arcx],
        });
      },
    },
    {
      label: `${translate(`${i18Path}developers.showcases`)}`,
      prefixIcon: <SlideshowIcon />,
      showMoreIcon: true,
      triggerSubMenu: 'showcases',
    },
  ];
};
