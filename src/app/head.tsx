import * as React from 'react';

export interface IHeadProps {
}

export default function Head (props: IHeadProps) {
  return (
    <>
      <title>Carbyde - Car buying app</title>
      <meta content='width=device-width,
      initial-scale=1' name='viewport'/>
      <meta name='description' content="This is a guide to buying a new car."/>
      <link rel="icon" href="/favicon.ico"/>
    </>
  );
}
