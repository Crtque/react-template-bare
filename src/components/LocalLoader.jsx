import React from 'react';

const LocalLoader = ({children}) => {
  if(children) {
    return (
    <>
        <div role='status' class='max-w-sm animate-pulse'>
            <h3 class='bg-gray-300 rounded-full px-2'>        
                {children}
            </h3>
        </div>
      </>
    );
  }
  return (
    <>
        <div role='status' class='max-w-sm animate-pulse'>
            <h3 class='h-3 bg-gray-300 rounded-full w-48 h-full mb-4'>        
            </h3>
        </div>
    </>
  );
};

export default LocalLoader;