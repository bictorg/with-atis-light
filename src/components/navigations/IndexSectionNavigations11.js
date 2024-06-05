import React from 'react';

export default function IndexSectionNavigations11() {
    return (
        <React.Fragment>
            <>
                <section className="overflow-hidden">
  <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80" />
    <nav className="relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto">
      <div className="flex flex-wrap justify-between h-full">
        <div className="w-full">
          <div className="flex items-center justify-between -m-2">
            <div className="w-auto p-2">
              <a className="inline-block" href="#">
                <img src="flaro-assets/logos/flaro-logo-black.svg" alt />
              </a>
            </div>
            <div className="w-auto p-2">
              <a className="navbar-burger" href="#">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 18L18 6M6 6L18 18" stroke="#111827" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center py-16 w-full">
          <ul>
            <li className="mb-12"><a className="font-medium hover:text-gray-700" href="#">Features</a></li>
            <li className="mb-12"><a className="font-medium hover:text-gray-700" href="#">Solutions</a></li>
            <li className="mb-12"><a className="font-medium hover:text-gray-700" href="#">Resources</a></li>
            <li><a className="font-medium hover:text-gray-700" href="#">Pricing</a></li>
          </ul>
        </div>
        <div className="flex flex-col justify-end w-full pb-8">
          <div className="flex flex-wrap">
            <div className="w-full">
              <div className="block">
                <button className="py-3 px-5 w-full font-semibold border hover:border-gray-300 rounded-xl focus:ring focus:ring-gray-50 bg-white hover:bg-gray-50 transition ease-in-out duration-200" type="button">Create Free Account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</section>


            </>
        </React.Fragment>
    );
}

