import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import TermsSectionNavigations1 from '../components/navigations/TermsSectionNavigations1';
import TermsSection__structures2 from '../components/__structures/TermsSection__structures2';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Terms() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <TermsSectionNavigations1 />
      <TermsSection__structures2 />
    </React.Fragment>
  );
}

