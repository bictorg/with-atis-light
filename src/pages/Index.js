import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionNavigations9 from '../components/navigations/IndexSectionNavigations9';
import IndexSectionNavigations10 from '../components/navigations/IndexSectionNavigations10';
import IndexSectionNavigations11 from '../components/navigations/IndexSectionNavigations11';
import IndexSectionNavigations12 from '../components/navigations/IndexSectionNavigations12';
import IndexSection__structures13 from '../components/__structures/IndexSection__structures13';
import IndexSectionFooters6 from '../components/footers/IndexSectionFooters6';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionNavigations9 />
      <IndexSectionNavigations10 />
      <IndexSectionNavigations11 />
      <IndexSectionNavigations12 />
      <IndexSection__structures13 />
      <IndexSectionFooters6 />
    </React.Fragment>
  );
}

