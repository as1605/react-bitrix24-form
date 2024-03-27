import { useEffect } from 'react';

export const Bitrix24Form = ({ src, data }: { src: string; data: string }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = src + '?' + ((Date.now() / 180000) | 0);
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return <script data-b24-form={data} data-skip-moving='true'></script>;
};
