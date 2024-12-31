import React, { useState } from 'react';
import {
  Container,
  Hidden,
  // IconButton,
  // Menu,
  // MenuItem,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import NavBar from './NavBar';

// import ETHLOGO from './Icons/123ETH';
import BTCLOGO from './Icons/123BTC';
// import selectDomainIcon from '../assets/domain_select.svg';

import Box from './Box';

// const ETH123URL = 'https://eth123.org/';

const Header = ({ language, onChangeLanguage, tagList }) => {
  const [visible, setVisible] = useState(false);
  // const [anchorEl, setAnchorEl] = React.useState(null);

  const translations = {
    zh: {
      ethTitle: '以太坊生态资源导航',
      btcTitle: '比特币生态资源导航',
    },
    en: {
      ethTitle: 'A Portal to Ethereum Ecosystem',
      btcTitle: 'A Portal to Bitcoin Ecosystem',
    },
  };

  const t = (key) => {
    return translations[language][key];
  };

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  //
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // render language change btn
  const renderLanguageBtn = () => {
    return (
      <Box display='flex' alignItems='center'>
        <select
          value={language}
          onChange={(e) => {
            const lng = e.target.value;
            window.localStorage.setItem('i18nextLng', lng);
            document.cookie = `i18next=${lng};path=/;domain=.eth123.org`;
            document.cookie = `i18next=${lng};path=/;domain=.123btc.org`;
            onChangeLanguage(lng);
          }}
          style={{
            padding: '6px 12px',
            fontSize: '14px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <option value='en'>English</option>
          <option value='zh'>中文</option>
        </select>
      </Box>
    );
  };

  // web header
  const webHeader = () => {
    return (
      <Box mb={3.75} backgroundColor='#fff' boxShadow='0 2px 8px #f0f1f2'>
        <Container>
          <Box
            display='flex'
            flexDirection='row'
            alignItems='center'
            justifyContent='space-between'
            py={2}
          >
            <Box display='flex' flexDirection='row'>
              <a href='/' style={{ textDecoration: 'none' }}>
                <Box position='relative'>
                  <BTCLOGO />
                  <Box mt={0.5} fontSize={14} color='#999'>
                    {t('btcTitle')}
                  </Box>
                  <Box
                    position='absolute'
                    bottom={-16}
                    left={0}
                    height={4}
                    width='100%'
                    borderRadius={2}
                    backgroundColor='#FF7828'
                  />
                </Box>
              </a>
              {/* <a
                href={ETH123URL}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'none' }}>
                <Box
                  ml={4.5}
                  pl={4.5}
                  borderLeft="1px solid rgba(0, 0, 0, .1)">
                  <ETHLOGO />
                  <Box
                    mt={.5}
                    fontSize={14}
                    color="#999">
                    {t('ethTitle')}
                  </Box>
                </Box>
              </a> */}
            </Box>
            <Box>{renderLanguageBtn()}</Box>
          </Box>
        </Container>
      </Box>
    );
  };

  // wap header
  const wapHeader = () => {
    return (
      <Box mb={2} py={1.25} backgroundColor='#fff'>
        <Container>
          <Box
            display='flex'
            flexDirection='row'
            alignItems='center'
            justifyContent='space-between'
            height={30}
          >
            <Box
              display='flex'
              cursor='pointer'
              onClick={() => {
                setVisible(true);
              }}
            >
              <MenuIcon />
            </Box>
            <Box display='flex' flexDirection='row' alignItems='center'>
              <BTCLOGO />
              {/* <IconButton
                aria-label="more"
                aria-controls="domain-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <img
                  src={selectDomainIcon}
                  alt=""
                  height={24}
                />
              </IconButton> */}
            </Box>
            <Box width={32}>
              <Box position='absolute' top={10} right={16}>
                {renderLanguageBtn()}
              </Box>
            </Box>
          </Box>
        </Container>
        {/* <Menu
          id="domain-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => {
            window.open(ETH123URL);
            handleClose();
          }}>
            123ETH
          </MenuItem>
        </Menu> */}
      </Box>
    );
  };

  return (
    <Box>
      <Hidden smDown>{webHeader()}</Hidden>
      <Hidden mdUp>
        {wapHeader()}
        <NavBar
          tagList={tagList}
          language={language}
          key={`NavBar-${(tagList || []).length}`}
          drawerVisible={visible}
          onClose={() => {
            setVisible(false);
          }}
        />
      </Hidden>
    </Box>
  );
};

export default Header;
