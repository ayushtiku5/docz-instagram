(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./Form.mdx":function(e,n,t){"use strict";t.r(n);var o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=t("./node_modules/react/index.js"),A=t.n(s),i=t("./node_modules/@mdx-js/react/dist/index.es.js"),r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),d=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),c=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),p=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),l=t("./src/components/InputField.js"),g=t("./src/components/Button.js"),m=(t("./src/index.css"),function(e){function n(){return Object(r.a)(this,n),Object(a.a)(this,Object(c.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){var e=this,n=this.props.credentials.map(function(n,t){return A.a.createElement(l.a,{onChange:e.props.onChange,label:n,key:t})});return A.a.createElement("form",{onSubmit:this.props.onSubmit},A.a.createElement("fieldset",{style:{borderStyle:"none"}},n),A.a.createElement("div",{className:"errorSection"},A.a.createElement("p",{style:{color:"red",fontSize:"15px"}},this.props.errorMessage)),A.a.createElement("div",{className:"submitButtonContainer"},A.a.createElement(g.a,{type:"submit",content:this.props.submitContent})))}}]),n}(A.a.Component));"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Form",filename:"src/components/Form.js"}}),"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Form",filename:"src/components/Form.js"}});var B=t("./node_modules/docz/dist/index.esm.js");t.d(n,"default",function(){return h});var u={},b="wrapper";function h(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)(b,Object.assign({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"forms"},"Forms"),Object(i.b)("hr",{style:{border:"1px solid"}}),Object(i.b)("h2",{id:"login-form"},"Login Form"),Object(i.b)(B.c,{__position:1,__code:"<div\n  style={{\n    height: '315px',\n    width: '350px',\n    border: '1px solid',\n    backgroundColor: 'white',\n  }}\n>\n  <Form credentials={['username', 'password']} submitContent=\"Login\" />\n</div>",__scope:{props:this?this.props:t,Form:m,Props:B.d,Playground:B.c},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymAAxIVZSNWV2g9OABHIAF030OBJGggRrRVVB-TtKZgHYAAFAc4CWYioFcRIUiEUIMHYeRXWNdoDwALz9fD1XYQNJWY-DTUVMFUF0FFjlONjnAIRIsXYbh2GAdYogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBndSABZdPYAA2XT9PWMBgMg71oESdT-GcQ4EQdTASKEfgliIahKDgIyETs6sHJoZwIDYy52AARjMgz5GE0SpgAQTmOT2AjIjyBsKB0DDRiOTksQcujGR2BRGSYG4YB2Kk2q4HkLca2AfLoCK4IADIevGRJ5koZpOsK4ruAmuUwHoyUBlQdp2AAfg2LqwwjUqrlG7rUBS6spBkKs3zMGFuMwMAwigKZ1rKiq9sy5dqwTXiCBwSDMhSK8CDamtaxkFcfpq2B6sUx6fprTYIBSQh1KTeKAFZbIMsGwZxdAJhhuGNMR_6wa8AQp3U-LLLgSgoC4cLkZ-jwJW2Wi2gwRwoCFdSRhsWgKcp-RduR76wcYLDZXILpMBoCB4jgeqAG12jyDJUG9GB9LlIy4DgEYhXQdoAF0mPpDwiBeRw9BoPgQAAGUoVT-HYTccf22MVykZ7Xvez62qke7DrML8QCQlDPnXGgMIF_8tAoYD9AYLj7We_j2H4QTRBAXDo6mBpUBmcJIIgeccjg-OQA9dPM4IbPc_4W1uOvcIInMfP-A9aubmoCu8Ig90PVUbAPlVv1hOOrACOOGBztCS6eio1X2AF6EsBA9A7GdtdqBdEGfsnSNSrXym0p6YX9DFqA7HkiZbBwftKDuD599F8XcMpwtUDEhzsLLwrj737ID_FnAohmCMIysHiAyJYXcsClW4OVRgxcs450KnsVA9g_AzjqsAU-cBz5kRwNQJB7g0hMSooEKA9UgFQAZExbYMBEj1TAUxTcH5hIPy6AQPo5goygwfowF-spqDODeAbAg9V0GYMvhg3h_CXitRxg_BMkBc5wFHNVaSQNgDADxlOJqsB1KoBXu0LmvMZGU2ANwt-C9uaGL5pIOR79RwGIsTGDg5BJ5wAAHIK1NhkIQAhnBbG7P6EAdiLE1jrEo2qwMqBMzLCabIStIoEGirFQmCM9L6LQQSERV9PFCj1PACo-ClyBJkfbWQ0iilVScf4Vx7j-B6wEU3WuRsCCuDQKCAJpSgmMHqcyaS8xTa1JeNbXQIFBFpLPhfK-_SCCNP0HQwpnCdwlI4ZTKQ3DCkMNBrteQPs_aoUDgQDCMDS5wPQKHQCQzI5gVTjxTUccE6an4CnduCFO7hlwGcOAfd_TOkHqdEeF0pgVKnoc0xs956L01DgZeGZCIrg3gIa629ka7x6d0E-6TxkYMIfOOSk1-AqzVhra2y08WVPVvja2Vx-C0Dng80pzDWG3Q6ViqAcyjHCIxTgZl5igkJjQCXBBuCUFCPRVgnByD8EDV6WgwaMAmLyyPMKsZWCuUT0qW4hV_A-WwPLiACcMAACOoQIDC1tks5GUhmVrPvjWTZ2zkK7JXkHSQXTUCnO0Oc0C4Eh6x3roIe5ydK72meZIMBPcPm4X7t8oeZ1_mqqni60FdAF7XLNJCx0jqYWgzhQi0pu8PAEHMPJdhHSPA12ZICqpGqQAuutjgsmOxFUYI5XW2I2xWqjKbVgj1BB5BSFLc3VAVrc3UDEpM68BbsrFvsVqqYcbK11X4DW3VpCGSNoyRg7tTEUVro5Si-QpqH7rKYaOBl7KsEopxfJGpEik5LWqje8d5grj5vMNaiwmzvZKF9va0N7yzkR09SIyAsBGnNOdAIbeLAQpUVcoaWAWBrVgHg5aY1vi5pXCECMa1qN0YJUxljBD6wIZQwIFcAAnBpAj1rlKqXNLAMApGEqUd0tR1wKk0DmgiDMK4mMWNmF2kB6AMBiKxFAy0iD6wcN4CuAAJmY4R6sxHobsDk1R9YRlOwFFk3x6sNGOP0cY3DAApKx9jqBzT9BI7Jkz8dqz8bMDgDwAwxPge3lJq4VkNImaIzASGynVM6YsBpkyKRtMKYE5hlzGR4pua4Lh-KlHvOKd81Z7SXnTO0a8M3IgPHAvHFsGSaiVwkPYEQ8hlgXRZrUAw6Ma11KLTxEhmpdgBncIRdGFFgQMnYto2k0x9LPm_OMaTAN3TbHMsiAiDl9gyTrXBYKHRkejGZOzfWPZ11TNVKde3kp4bvGFMWHc9pfbGW0A8YIyEcIlBrXVHNPkNiWn2DqIyOaaoN2NYZCuCTMmOQiYHaex9gQFmOwQDyFcCy_31s4HKELCAMw_Hbck3FvrCXRsWF21cBLSWLBQcK7Bkr_31B5BiGARI5pu2bX0BkJUtmLCNZSOZl4MAiD3B6FTgQ738Yvay1NzHxNSZcBuzTOm9F0Dk9JszdgABiMAZkzIyasgADmtVDmH_R4dzU632beETJesyZ4h4Cd2YpxTk3luJ5oRgpeUwAdko21hzm20AC0R9WI7qPse-Gt4xijnv5szk45fWTanqy3fu4957QO3u2d2g5sdZbEHATAxkHr8XEvWoxzNkPOOCsweK_B61ROUQQFJ-L42jGER6A5-senjPaAs8p1Xh3XycBZO8Wh6gqeUfp8G6l-GeW9PmZ55EYPeXcd57g6V9YReSdk4p2zpvNeyYM_NEzhvC_aDV52sJHAM7TFd8xz3sbZncs-C0iNyyGkM_e9k6tiKRv7txXijJvL1Mdgi4wOLyJVwZcybAH_mTZvBzAAVQUQEGvG8B2xv36093d2Mzq2wAa2X2a0r03yANdRdW3kjyuB0WdGtV1yiX11oAQLnnNFr0bzQPsgfxN0xxsn-0zzt09zf1pjok_wIOfTIRgE5ynGBxYDB3YEVzy3d3k1O2a3ij-3YC0i0gSzy3WxALAIgKwCgKG0PzRzzGR0x3gPWHqzIOQIoOpzkNdX5BSE0RgGUNSwC3-yO0sPQN3yIBSBFHpkwByHMP8xEKR162D2zwBy5yB0yD4NZ0xiSy2S_VCm2FcDSFDmoH_XLwYG3n4HlUZCQALh-GLGqBex_DJCSKRgLlYAyHyBbmSP4A0hwBKI0n8jWxADVzhz8X4EpRAHSmqnwlgFnm9CyOHjJEoESFzDyAKD1TNHF3KD-FLAqLsxACiDQDqILlDU0FGIsH4EwHmHDBEhzjgCmMRQLnYimP4AAD14ocAZNSi5iaw7kzRtiQA9irIcBFccArJjj5i_UBirRzjLjrjbjW531-Ntlhi3lqBIAUgojUAYjhk4iqVmdCtaA6j-AhZxRaALNNQyC5h-AQiuYgA",style:{display:"flex",justifyContent:"center"},mdxType:"Playground"},Object(i.b)("div",{style:{height:"315px",width:"350px",border:"1px solid",backgroundColor:"white"}},Object(i.b)(m,{credentials:["username","password"],submitContent:"Login",mdxType:"Form"}))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"different-fields"},"Different fields"),Object(i.b)(B.c,{__position:3,__code:"<div\n  style={{\n    height: '315px',\n    width: '350px',\n    border: '1px solid',\n    backgroundColor: 'white',\n  }}\n>\n  <Form credentials={['email']} submitContent=\"Login\" />\n</div>",__scope:{props:this?this.props:t,Form:m,Props:B.d,Playground:B.c},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymAAxIVZSNWV2g9OABHIAF030OBJGggRrRVVB-TtKZgHYAAFAc4CWYioFcRIUiEUIMHYeRXWNdoDwALz9fD1XYQNJWY-DTUVMFUF0FFjlONjnAIRIsXYbh2GAdYogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBndSABZdPYAA2XT9PWMBgMg71oESdT-GcQ4EQdTASKEfgliIahKDgIyETs6sHJoZwIDYy52AARjMgz5GE0SpgAQTmOT2AjIjyBsKB0DDRiOTksQcujGR2BRGSYG4YB2Kk2q4HkLca2AfLoCK4IADIevGRJ5koZpOsK4ruAmuUwHoyUBlQdp2AAfg2LqwwjUqrlG7rUBS6spBkKs3zMGFuMwMAwigKZ1rKiq9sy5dqwTXiCBwSDMhSK8CDamtaxkFcfpq2B6sUx6fprTYIBSQh1KTeKAFZbIMsGwZxdAJhhuGNMR_6wa8AQp3U-LLLgSgoC4cLkZ-jwJW2Wi2gwRwoCFdSRhsWgKcp-RduR76wcYLDZXILpMBoCB4jgeqAG12hgKJoHaABdJj6Q8IgXkcPQaD4EAABlKFU_h2E3HH9tjFcpGe173s-tqpHuw6zC_EAkJQz51xoDCBf_LQKGA_QGC4-1nv49h-EE0QQFwwOpgaVAZnCSCIHnHI4NDkAPVj-OCET5P-Ftbjr3CCJzFT_gPULm5qDzvCIPdD1VGwD44DgP1hOOrACOOGBztCS6eio5v2AF6EsBA9A7EttdqBdEGfsnSNStnym0p6YX9DFqA7HkiZbBwftKDuD419F8XcMpwtUDEhzsJzwqt9X7J1_FnAohmCMI1YeIGSWBusFK7hyqMEzgnJOhU9ioHsH4GcdVgA7zgHvMiOBqCQPcGkJiVFAhQHqp_KADImLbBgIkeqv8mKbg_MJc-XQCB9HMFGUG59GDX1lNQZwbw1YEHqnAhBB94EsLYS8VqONz4JkgMnOAo5qrSSBsAYAeMpxNVgOpVA092hc15sIymwAmG33HtzDRfNJCiLvqOdR-iYwcHIAPOAAA5b0dV-AZCEAIZwWxuz-hAKY_RNY6ySNqsDKgTMywmmyPpQ0wFoqxUJgjPSajYEEm4YfRxQo9TwAqGgpcnjhGm1kEIrJVVLH-BsXY7WKt2EV2LhrAgrg0Cgg8bkrxjBynMmkvMEp_CI4XxAhwuJu996H1KerP2NBSGZIYTuHJ9DKZSCYZk8hoNdryCdi7VC7sCAYWAdnUB6BvaAV0F0gOtdg6l0EJqfgUda4IXruGXAZwW64WEide0Z0LpTAKYPDZOiR5jwnpqHAU8MyERXPPAQ10l7IxXi07o294l9PgRg-cclJr8CMs3EYQp0CG2WsiwpaL8aGyuPwWgo8zm5KoTQ26DT4VQFGZorhsKcBUr0V4hMaAs7gJQdAzhMLEHIKgWggarTYGDRgExVAxSenwPpYy_uhTbFHm1qykBucQAThgAAR1CBAYWxtJnIykFS2ZZ8awLKWchFZ08PaSCaagHZ2g9n-zAtHHimoQ5h1OZHfO9pLmSF_k3O5bd_TOg7qdbuLyZWD2tV8ug49nVmj-Y6C1gLQbAtBbkleHgCDmHknQhpHgi7MjeUU-V_BrWG2QWTHYXLek8ogRW7YrUJUJPgfa4ZUg82V1QIatN1AxIDIINeTN2Uc1mMVVMcNRb7EgFLSqnBDIq2SsQS2ggTFIXzqbTgSF8gdXnzmZQ0c5K6WIMhYi-S_A-2Yuqu0gd5grgZvMEaiwCzHZKGdma31tzdlDIMGBbhkBYCVOqc6AQS8WAhSoq5Q0sAsBGrAFBy0WrXFzSuEIEYRrUbowSpjLG0H1gQyhgQK4ABODS2GjXKVUuaWAYACMJRI7pMjrgVJoHNBEGYVxMb0bMLtX90AYDEViABmpwH1jobwFcAATHRnD1Y8PQ3YJJ0j6wjKdgKBJzj1ZyPMaozRuGABSBjTHUDmn6PhiT-nQ7Vi42YHAHgBiCaA0vUTVwrIaX07hmAkM5MKfUxYZTJkUhqek9xlD9mMjxUc1wDD8USNuZkx50z2lXMGYo14SuRB2M-eOLYMk1EriwewDBuDLAuizWoMh0YRqiUWniJDNS7BtO4WC6MULAhxMRbRmJ2jSX3OeZo0mbrGnGMpZEBEdL7BolGr8wUSj3caPiYm-sKzNqmaqRa0vWTfWOPSYsE57SW3ktoHY9hkI4RKBGuqOafIbFVPsDkRkc01RzvooyFcEmZMchE227d57AhjMdggHkK4FkvtLZwOUIWEAZhuLWyJyLnXosDYsBtq40XYsWFAzliD-WvvqDyDEMAiRzRLs2voDISoLMWBqykIzLxZb3B6KTgQT38b3dS6NlHxNSZcHOzTOm9F0BE9JszdgABiMAZkzLiasgADiNaD8H_QodzRa32JeAThes1pzB4Cl2YpxUk5lyKFoRjxbkwAdhI416zK20ACxh9WXbCO0e-FNzR4jzupszhYwfCTinqwXauzdu7v3HsWd2tZvt1r7c7bhyjmLRrkfjb9-j7L4G8tQaNbjlEEACeC81jRhEegmfrCpzT2gRB6eF9oMXnawkcBJOcYh6g7Wovx56wl-GmXNNGbZ5EX3mWMdp8gwV9YWf8eE-JwzovRrS_mlpxXkn0-lvWdHTolv8O2-DcMxlnwWl-uWQ0gn13EmFsRR11duK8VxOZepjsPnGBBeBKuGL8TYBX_iat4GnAABVcRAhrzeDrbH5dbO6O56aVbYDVZkzU6L7V6f7WbWpLzB5XDKLOhGrq5BKa60AQGjzmil6wFk72Tn564o42RfaJ4W7O6360x0QP4YG3q4IwDM5Th_YsCA7sDS6ZaO5SYHZ1bxSfbsBaRaTRaZbL42q_4ZAAFYBAG9Zx6I55ix6YbO5VZ4HQF1ZV6EG15f78gpAKIwAyEJbeZfa7ZGHwE2o6Eij0yYA5AGFeY8Gw4da-7J7fYs6_aZBsH06YyxaLIvqhTbCuBpDezUCfr54MBLz8BipHj8AEpATlB_Cljmg_hkiMggBIxpysAZD5BVxIBpwaQ4B5EaT-SLYgAK6Q5uLRFpzpTVT4SwAjzejJFdxkiUCJC5h5AFCqpmiC5xHEi1JpH8ByzuIxG-qaBFGWYlEwDzDhgiRJxwAVFgppzsQVH8AAB68UOA4m-RoxP0bqZoSxIAqxVkOA0uOAVkWxNYOxkolokQexBxRxJx1cj6XGSy8RNy1AkAKQQRqAIR-yYEikIA5eOWtA0R_AQs4otAxmmoeBcw_APhXMQAA",style:{display:"flex",justifyContent:"center"},mdxType:"Playground"},Object(i.b)("div",{style:{height:"315px",width:"350px",border:"1px solid",backgroundColor:"white"}},Object(i.b)(m,{credentials:["email"],submitContent:"Login",mdxType:"Form"}))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"with-error-message"},"With error message"),Object(i.b)(B.c,{__position:5,__code:"<div\n  style={{\n    height: '315px',\n    width: '350px',\n    border: '1px solid',\n    backgroundColor: 'white',\n  }}\n>\n  <Form\n    credentials={['username', 'password']}\n    submitContent=\"Login\"\n    errorMessage=\"User not found\"\n  />\n</div>",__scope:{props:this?this.props:t,Form:m,Props:B.d,Playground:B.c},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymAAxIVZSNWV2g9OABHIAF030OBJGggRrRVVB-TtKZgHYAAFAc4CWYioFcRIUiEUIMHYeRXWNdoDwALz9fD1XYQNJWY-DTUVMFUF0FFjlONjnAIRIsXYbh2GAdYogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBndSABZdPYAA2XT9PWMBgMg71oESdT-GcQ4EQdTASKEfgliIahKDgIyETs6sHJoZwIDYy52AARjMgz5GE0SpgAQTmOT2AjIjyBsKB0DDRiOTksQcujGR2BRGSYG4YB2Kk2q4HkLca2AfLoCK4IADIevGRJ5koZpOsK4ruAmuUwHoyUBlQdp2AAfg2LqwwjUqrlG7rUBS6spBkKs3zMGFuMwMAwigKZ1rKiq9sy5dqwTXiCBwSDMhSK8CDamtaxkFcfpq2B6sUx6fprTYIBSQh1KTeKAFZbIMsGwZxdAJhhuGNMR_6wa8AQp3U-LLLgSgoC4cLkZ-jwJW2Wi2gwRwoCFdSRhsWgKcp-RduR76wcYLCiBxn7yC6TAaAgeI4HqgBtdo8gyVBvRgfS5SMuA4BGIV0HaABdbnKYsekPCIF5HD0Gg-BAAAZShVP4IWawyIQBD1eAKjSS2AFU4AydhUBEQ16fQe3QZ-zccf22MVykZ7Xvez62qke7DrML8QCQlDPnXGgMIF_8tAoYD9AYLj7We_j2H4QTRBAXDS6mBpUBmcJIIgeccjgyuQA9Rvm4IVv25D-v2GvcIInMTv-A9UebmoIeIPdD1VGwD51b9YTjqwAjjhgc7QkunoqPV9gBehLAQPQOxY7XagXRBn7J0jUr78ptKelF_QJagOx5ImWwcH7JQO4HwP7i0lrhA2b8HLYQHoVH-79sif0ljgKIMwIwRlYPEBkSxl5YFKtwcqjBe4tzboVPYqB7B-BnHVYAf84AALIjgaglD3BpCYlRQIUB6qYKgAyJi2wYCJHqrgpim4PzCQNl0AgfRzBRlDpTRg0DZTUGcG8E2BB6p0IYUA-hKi1EvFag7A2ijSGX1HNVaSQNgDADxlOJqsB1L-2dO0LmvMDYG2AEo2Bl99buL5pISA7cfZfSMQoqq5Aj5wAAHJK0tk7IUzgtjdn9CANxfi-YzAsbVYGVAmZlhNNkFWkUCDRVioTBGelXG0IJNo4B8SXZu1cGwpcaS_GR1kKE5GMYOARP8NE2J_AjbqJnuPM2BBXBoFBKkzp7jGAjOZNJeYlshkvH4IWc2Gjqn_0AcAlZBAxn6FEa02ZO4OnyK6QEmCxzxGg12vINOGdULZwIBhYh_dTH50AroECBgwLD3LpPQQmp-B1wXghJe4ZcBnDgOvf0zot6nV3hdKYvTj5vO8WfC-V9NQ4BvhmQiK5H4CGui_ZGb9FndF_jUnZ9COHzjkpNfgasNZazWctJlfTNb4zWVcfgtBz4godlImRt10m1jpVAY5HitE0pwBK3xYraxoD7uQlh1DNHUsYcwqhbCBpLNoYNGATFFZHg1dsxh8rD59Jiaa_gyqSGDxABOGAABHUIEBRbh3Of4iV1yIE1juQ85CTzb450kPM1AnztDfOLn8heAK3RV2BbXW03FwWSFwavGFuEN7wu3mdZFVrj4RsxXQS-PEcV4rvoSstT8FIOzfh4Ag5h5JyLFYwDwY9mSov6bakAEa1nMLJjsM19DZVDtiNsVqWyx2MJjTQeQUhO2z1QH6ht1AxJ7OvM27Kbb0mMHtVMItva6r8AHU6nhDJR21PofOggTEKXXtlRS-QXqDY3MkaOEVMrGEUoZfJQZ-ia5LWqkB7d5grhNvMP6iwdzU5KHTsGzN0KvlF1At3QBkBYBjImc6AQL8WAhSoq5Q0sAsD-rAGRy0HqklzSuEIEY_rUbowSpjLG5H1gQyhgQK4ABODS7H_XKVUuaWAYAeMJQE7pITrgVJoHNBEGYVxMbSbMLtbRWGYDEViDhyZ-H1jMbwFcAATFJjj1YuPQ3YKZwT6wjKdgKCZ1T1ZhPybExJuGABSGTcnUDmn6Nxkz3nK7VjU2YHAHgBi6bwy_QzVwrIaW85xmAkMrM2ecxYezJkUhOfM-phj0WMjxVi1wFj8UBNJYsylwL2lEs-ZE14WeRBlMZeOLYMk1EriUewBRqjLAuizWoPR0Y_r-UWniJDNS7B3O4Xy6MQrAhjMlbRkZyTdXkupYk0mdbLnZMNZEBEZr7AKn-qywUUTu8JPGZO-sMLkamaqQWy_SzW2VPmYsHF7Sb36toGU-xkI4RKD-uqOafIbFHPsFsRkc01RgdawyFcEmZMchE3e5D-HAh_MdggHkK4Fk0d3ZwOUEWEAZjJKewZ0rq3ys7YsC9q45XKsWEIx1kj3W0fqDyDEMAiRzR3s2voDISoQsWAmykPzLwYBEHuD0QXAg4f42h41w7DPiaky4MDmmdN6LoD56TZm7AADEYAzJmWM1ZAAHP6wnxP-hk7mgtvsL9ckG9ZpLijwFQcxTiqZ1rxTzQjGq1ZgA7AJ2b4WHtoAFhT6sn2adM98EHiT_GE9nZnApoBJnbPVhB2DiHUPMew5C7tcLW6u0UOArhjIy2ysVf9fT472fmfteI11sj_rOcoggDzvXGyBd6Hl-sMXEvaDS_77QQfO1hI4HqYkwbqAa_U7rxtmr8NWuub88ryIWfWss9b6Rnr6xO_c95_z2XA__XD_NJLsf5-J_h7hTgQ93jF8M-X7t3zLWfBaW25ZDS9ek8TMbsIpPcwc4p4pjNWtqYdhtcMA9c8krhjdjMwBkDjMH9wtvYMhrxvBntAC1sE848vNRtsBxsyZxdx8hc7twsI0X4C8rgnEYB_UXd8k3daBiDz5zRh8KDJ8LB_cwCGcbI0cG9Q8E9oDaY6I4DmDINeFGD1gC8scWBcd2ALdWs48zMfspt4pUd2AtItJytWsqDI1MCBBsCsBcDNs39ac8wqcGciD1gxtOCyCpsEQL9DCn8iAUh7EYBzCat0s0dPs_D0DI1-QUgRQg5cwfC0t1DKcVss8m90dFdMdMhFCZdMZKt7kENQptgmk_xNBqBUMNkGAX5-ATVGQkAu4fhixqhocfwyQyikYu5WAMh8g55yj-ANIcAOiNJ_JbsQBbdSdkl-BeUQB0pqp8JYAz5vQ6id4yRKBEhcw8gChnUzQ9dyg_hSwejQsQAog0Ahiu5M1NBNiLB-BMB5hwwRI244A9jSUu52I9j-AAA9eKHAYzToo4msJNM0e4kAJ4qyHAC3HAKyd444oFFYq0b434_4wEkOWDNTB5dYqFagSAFIfOfI6NNDX5EARSEAUfDrWgIY_gEWcUWgfzTUTguYfgDIrmIAA",style:{display:"flex",justifyContent:"center"},mdxType:"Playground"},Object(i.b)("div",{style:{height:"315px",width:"350px",border:"1px solid",backgroundColor:"white"}},Object(i.b)(m,{credentials:["username","password"],submitContent:"Login",errorMessage:"User not found",mdxType:"Form"}))))}h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"Form.mdx"}}),h.isMDXComponent=!0},"./node_modules/css-loader/dist/cjs.js!./src/index.css":function(e,n,t){(e.exports=t("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([e.i,".profileContainer{\n  display: flex;\n  flex-direction: row;\n  width: 1500px;\n  height: 900px;\n  margin-left: 100px;\n  margin-top: 50px;\n}\n.profilePicContainer{\n  width: 200px;\n  height: 200px;\n  padding: 2px;\n  margin-left: 5%;\n  margin-right: 2%; \n  \n}\n.bioContainer{\n  width: 60%;\n  height: 200px;\n  padding: 2px;\n}\n.rowContainer1{\n  width: 100%;\n  height: 30%;\n  margin-bottom: 5px;\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n}\n.rowContainer2{\n  width: 100%;\n  height: 30%;\n  margin-bottom: 5px;\n  padding-left: 25px;\n  \n}\n.loginContainer{\n  height: 350px;\n  width: 350px;\n  margin: 50px auto;\n  box-sizing: border-box;\n  border: solid 1px;\n  border-radius: 4px;\n  \n}\n.descriptionContainer{\n  width: 100%;\n  height: 10%;\n  display: flex;\n  justify-content: center; \n  align-items: center;\n  border-bottom: 1px solid;\n  background-color: #f44268;\n  \n}\n.descriptionContainer p{\n  color: white;\n  font-size: 20px;\n  font-weight: 700;\n}\n.loginFormContainer{\n  width: 100%;\n  height: 90%;\n  padding-top: 20px;\n  box-sizing: border-box; \n}\n\n.submitButtonContainer{\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.errorSection{\n  width: 100%;\n  height: 15px;\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.inputField{\n  width: 100%;\n  margin: 5px 0 30px 0;\n  height: 25px;\n  font-size: 12px;\n  background-color: #f2f2f2;\n}\n\n.UserBox{\n  height: 100%;\n  width: 15%;\n  text-align: center;\n}\n\n.Button{\n  border: none;\n  color: white;\n  text-align: center;\n  font-size: 16px;\n  height: 70%;\n  background-color: blue;\n  border-radius: 8px;\n  width: 100px;\n  margin: 11px 0 0 10px;\n  \n}\n\n.UserBox{\n  height: 100%;\n  width: 15%;\n  text-align: center;\n}\n\n.imgStyle{\n  height: 200px;\n  width: 200px;\n}\n\n.imgRounded {\n  height: 200px;\n  width: 200px;\n  border-radius: 50%;\n}",""])},"./src/components/Button.js":function(e,n,t){"use strict";t.d(n,"a",function(){return c});var o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),s=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),A=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),d=t("./node_modules/react/index.js"),a=t.n(d),c=(t("./src/index.css"),function(e){function n(){return Object(o.a)(this,n),Object(A.a)(this,Object(i.a)(n).apply(this,arguments))}return Object(r.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=a.a.createElement("button",{className:"Button",onClick:this.props.onClick},this.props.content),n=a.a.createElement("input",{className:"Button",value:this.props.content,type:this.props.type});return"submit"===this.props.type?n:e}}]),n}(a.a.Component));"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/components/Button.js"}}),"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/components/Button.js"}})},"./src/components/InputField.js":function(e,n,t){"use strict";t.d(n,"a",function(){return c});var o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),s=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),A=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),d=t("./node_modules/react/index.js"),a=t.n(d),c=(t("./src/index.css"),function(e){function n(){return Object(o.a)(this,n),Object(A.a)(this,Object(i.a)(n).apply(this,arguments))}return Object(r.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e="password"===this.props.label?"password":"text";return a.a.createElement("label",null,this.props.label,a.a.createElement("input",{onChange:this.props.onChange,type:e,name:this.props.label,className:"inputField",required:!0}))}}]),n}(a.a.Component));"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"InputField",filename:"src/components/InputField.js"}}),"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"InputField",filename:"src/components/InputField.js"}})},"./src/index.css":function(e,n,t){var o=t("./node_modules/css-loader/dist/cjs.js!./src/index.css");"string"===typeof o&&(o=[[e.i,o,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0},A=t("./node_modules/style-loader/lib/addStyles.js")(o,s);o.locals&&(e.exports=o.locals),e.hot.accept("./node_modules/css-loader/dist/cjs.js!./src/index.css",function(){var n=t("./node_modules/css-loader/dist/cjs.js!./src/index.css");if("string"===typeof n&&(n=[[e.i,n,""]]),!function(e,n){var t,o=0;for(t in e){if(!n||e[t]!==n[t])return!1;o++}for(t in n)o--;return 0===o}(o.locals,n.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");A(n)}),e.hot.dispose(function(){A()})}}]);
//# sourceMappingURL=form.5d51d741cf53034f5f55.js.map