import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
 
import {setRequestLocale} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  const newLocale = await setRequestLocale(locale);
  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as any)) notFound();
 
  return {
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
