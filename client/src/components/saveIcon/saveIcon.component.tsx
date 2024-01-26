import { HTMLAttributes, ReactPropTypes } from "react";

export const SaveIcon =({className}:HTMLAttributes<SVGElement>)=>{
return (
  <svg
    className={className}
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5761 0.597622L15.9095 5.93095C16.0758 6.0987 16.1686 6.3258 16.1672 6.56207V13.6732C16.1672 15.1459 14.9733 16.3398 13.5006 16.3398H2.8339C1.36114 16.3398 0.167236 15.1459 0.167236 13.6732V3.00651C0.167236 1.53375 1.36114 0.339844 2.8339 0.339844H9.94501C10.064 0.342064 10.1815 0.36617 10.2917 0.410955C10.3976 0.454282 10.4942 0.517665 10.5761 0.597622ZM9.05613 2.11762H5.50057V3.8954H9.05613V2.11762ZM10.8339 14.5621H5.50057V11.8954C5.50057 11.4045 5.89854 11.0065 6.38946 11.0065H9.94501C10.4359 11.0065 10.8339 11.4045 10.8339 11.8954V14.5621ZM13.5006 14.5621C13.9915 14.5621 14.3895 14.1641 14.3895 13.6732V6.92651L10.8339 3.37095V4.78429C10.8339 5.27521 10.4359 5.67318 9.94501 5.67318H4.61168C4.12076 5.67318 3.72279 5.27521 3.72279 4.78429V2.11762H2.8339C2.34298 2.11762 1.94501 2.51559 1.94501 3.00651V13.6732C1.94501 14.1641 2.34298 14.5621 2.8339 14.5621H3.72279V11.8954C3.72279 10.4226 4.9167 9.22873 6.38946 9.22873H9.94501C11.4178 9.22873 12.6117 10.4226 12.6117 11.8954V14.5621H13.5006Z"
      fill="white"
    />
  </svg>
);

}