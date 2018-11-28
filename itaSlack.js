/*
Slack.app/Contents/Resources/app.asar.unpacked/src/static/ssb-interop.js
に下記を追加
*/
//痛化
var gCss
var gImg
var gCssText
var gButton
var gCheckbox
var gLabel
function myStyleInit(){
  gCss=document.createElement("style")
  gCss.id="myStyleCss"
  document.getElementsByTagName("head")[0].appendChild(gCss)
  gImg=document.createElement("div")
  gImg.id="myBackgroundImage"
  document.getElementById("messages_container").appendChild(gImg)
  gCssText=`\
  .c-scrollbar__hider{\
    background: rgba(0,0,0,0) !important;\
  }\
  .c-scrollbar__hider {\
    background-color: rgba(255,255,255,0) !important;\
  }\
  .c-message--hover {\
    background-color: rgba(240, 240, 240, 0.5) !important;\
  }\
  .c-message--focus {\
    background-color: rgba(240, 240, 240, 0.5) !important;\
  }\
  ts-message:hover {\
    background-color: rgba(240, 240, 240, 0.5) !important;\
  }\
  #myBackgroundImage{\
    background-image: url(`+kImgBase64+`) !important;\
    background-size: cover !important;\
    position: absolute !important;\
    width: 100% !important;\
    height: 100% !important;\
    backgroundPosition: top !important;\
    opacity: 0.15 !important;\
  }`
}
function enable(){
  gCss.textContent=gCssText
}
function disable(){
  gCss.textContent=""
}
var gEnable=true
function buttonInit(){
  gButton=document.createElement("img")
  gButton.id="myStyleEnableButton"
  gButton.src=kHeartImg
  gButton.style.backgroundSize="cover"
  gButton.onclick=()=>{
    gEnable=!gEnable
    if(gEnable){enable()}
    else{disable()}
  }
  //チェックボックス
  gCheckbox=document.createElement("input")
  gCheckbox.type="checkbox"
  gCheckbox.style.display="none"
  gCheckbox.id="myStyleCheckbox"
  //ラベル
  gLabel=document.createElement("label")
  gLabel.htmlFor="myStyleCheckbox"
  gLabel.id="myStyleCheckboxLabel"
  gLabel.appendChild(gButton)
  //ボタンアニメーションCSS
  let tStyle=document.createElement("style")
  tStyle.textContent=gButtonAnimationCss
  document.getElementsByTagName("head")[0].appendChild(tStyle)
  //ボタンをDOMに追加
  let add=()=>{
    let tElements=document.getElementsByClassName("c-scrollbar__child")
    if(tElements.length==0){
      setTimeout(()=>{add()},2000)
      return;
    }
    tElements[0].appendChild(gCheckbox)
    tElements[0].appendChild(gLabel)
  }
  add()
}
document.addEventListener('DOMContentLoaded', function() {
  myStyleInit()
  buttonInit()
  enable()
});
let gButtonAnimationCss=`\
  #myStyleEnableButton{\
    cursor:pointer;\
    width:44px;\
    height:44px;\
    transition-duration:0.3s\
  }\
  #myStyleEnableButton:hover{\
    width:52px;\
    height:52px;\
    margin:-4px;\
  }\
  #myStyleEnableButton{\
    animation: clicked2 0.5s ease 0s 1 alternate none running;\
  }\
  #myStyleCheckbox:checked ~ #myStyleCheckboxLabel #myStyleEnableButton{\
    animation: clicked 0.5s ease 0s 1 alternate none running;\
  }\
\
@keyframes clicked {\
0% {\
  width:52px;\
  height:52px;\
  margin:-4px;\
}\
33% {\
  width:64px;\
  height:38px;\
  margin:-2px;\
  margin-left:-9px;\
  margin-top:12px;\
}\
66% {\
  width:38px;\
  height:64px;\
  margin:-2px;\
  margin-left:2px;\
  margin-top:-12px;\
}\
100% {\
  width:52px;\
  height:52px;\
  margin:-4px;\
}\
}\
@keyframes clicked2 {\
0% {\
  width:52px;\
  height:52px;\
  margin:-4px;\
}\
33% {\
  width:64px;\
  height:38px;\
  margin:-2px;\
  margin-left:-9px;\
  margin-top:12px;\
}\
66% {\
  width:38px;\
  height:64px;\
  margin:-2px;\
  margin-left:2px;\
  margin-top:-12px;\
}\
100% {\
  width:52px;\
  height:52px;\
  margin:-4px;\
}\
}`

let kHeartImg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABmJLR0QAUABwAMwHc5J/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gscCzYzwN7WnQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAYcklEQVR42u2d7Y8k11XGn1td1dPd3hfWawIiEi8C8f4P8AElIGHJUoyUDxESiCgJxqAgpIgYkiDZSUzk2NhS4gR2IdgmeE1sx15HxBLkK0LiG/8AIBMFhyhg74x3Zruq6+UePty6Vbdu33rpnp6ZqqnzrFoz29MzU91zf/2cc++55wIsFovFYrFYLBaLxWKxWCwWi8"+
"VisVgsFovFYrFYLBaLxWKxWCwWi8VisVgsFovFYrFYLBaLxWKxWCwWi8VisVgsFovF6rUEvwSsLrr+D0T7R8D+EfDk7wnBgLBYAL75r0S3l8D+IXCQA/LOEYEoxXN/Mj3348fjIcCq09/+4x26dbCElIAkQEqACAAIIODDnw+JAWGNVm/+zwGm06CAQxKQyRyQXA88RcSAsEanP3vmu3TPlbsgJZBlJRxSqq8T0SheBwaE5dQ9V+4CkIdWBMisDLNABJWm07l3EQaEVSuCAiKTQEbl5wSA8n/p6ogdhDVOCQGVg2hIJJBlBEEEkXuGv3fhXLsIA8KqdY+7Ly9Aed6hbwQCCQEC5yCsker6zQM9matCKyO8KvHBGiTn0UV8Hg6s9dhKfTBDq3INJP"+
"9IKMIsdhDWuMKrfPBLQhFiZXoNhAgidw5/etfa9543F2FAWE4DIeRrH2RM9RYzWGWYxQ7CGmWCrkOsygyWhHIPIkyCee33nycXYUBYtSpWz41SEyNFadR5gYQBYdXGWdNA1WFlWR5eSYmRVJgwIKxmXf2BRdVBqKzk7boGch5chAFhVXTtNbUGYoZWWV6wqEf7JoWKQ4eEAWHZkVWZoGdl7iEpT9BBG++yGzIkDAirIiIFSWWKVxr7QLYc6kOFhAFhVR1Er6KTWaBo7AMBbb0X5IGniIYGCgPCqjoIABJleJWZhYqUA3TMnehDgoQBYa27CJX7P3SoRSQhBO1sJ+FQIGFAWOsWgrL+SjuJCq3yL+8Qkr6DwoCwqu6R5x970wAky+leXYMlaPc7Qf"+
"oMCQPCKnTt5gERgEsXF6p615jFElTCcRJl7n2FhAFhOaMscx+I3oeOolHDyYzlPoZcDAirEl4JlHtAioVCXcULwA8WoBPeKdUnSBgQltM9yJjB0lO8RIQ0Wap54BNWX9yEAWFV4IAodw8WzRpIlqFVsVv9dHTWkDAgrEqIBRhbbItGcQZE4vT7mZylmzAgrIqDSGnsQ8/KGiyNhSDCWW0KOQtIGBBW6SBCjX0dYpHeB5KHVkRqsXA6u3Rm13jabsKAsAAA1187IBBw+dIC02mgQClmsAAh8m6KPTkR5LQg4b5YLBVeGSUm0loDKUMw6lUzEw3JMw+d3IlX7CCsIkEXqM5gZQRkeaxFhXv0b8H7JMMuBoSl3EHkE7kSaydK6W7u6CcfJxp2MSCsYu"+
"ALrO9F14VXglQcFswu9vpp7NpNOAdhFZIEwOrHq/ITUovncjjPZVf5CTsIqwIIUbVRnH4vFkTw9+4a3HM6rpswIKwiSde1V3qBsDywUy0UJqvDQT6340DCgLDKNEQCQd5NUVplJkM/EH1bSBgQFq69lm+UurSoHHUgjSOf9eiKw4MTXXfoGyQMCKvYIVjs/8iMKl4Bo5C3LFQcCyQMCKuQucW2cA9SU1sEVWpy4+ErBRhjgIQBYRWH5UijSUNG1RRewL1GeN4h4XUQVjGD5aGaf1Cx/VwHV+4xZULCR7CxzqeL2LsI833oVTDax/4zDwkxFFfpAjMDwqrWYGVlX17z60VP0o4aEigMCKs1xtLbayshVsU5uh+cMyRQ2lyEARm5rr12QIKAyxcXCK"+
"aB0aghPzGHjD0gx2j3M1RHYUA4vgJg5B/5VG+x7qGhINpJR8WhgcKAsFT3dlk9D0Ttj6LKAuHzD9+9s4HdJ1CawiwGhNMPVcELsw+WXkAXBSTihHZK9d1NeB2EI6zKPpByJyGpZtUkAJxsL6w+r6MwIGN3EFFO8RJVy9yrW21PZ9z2DRYGhKVCKu0gmVlmQifuHn2B5YGniFzhHucgHGNVVs9Vwp7BLL4SPej2c1ZJPTvIiHX95gGRyB3EODCnMA8Yu0F6khpoSE4r/GIHGXuCLoFLFxYIgkC1G83M0IqMeqx+6bTchAEZOyQSyFBtFmf2p6b8TIQbj9wtxggJAzL2BB3VFXTd6idvhIWTPHJtCJAwIGOWqB51oLfaCrP+qnar1DggYUDG7iBkHH"+
"lAxoGdKGOt87UFigFhdTWQPKxKM3Mvemak8DiZM58H5CIMyJgTdFGuoMtiD0i5QYowbvdgQEas6zcPSMo8SadyJ6EyDdWLV+SkCBpGU96TcBEGZMwOkqcZvh8U+YcwVghpECk6OwjrJODInePCXQurF5Y+SYoKiG48clUwIKxxJegwpniNXljVnKOfq+inKa7FGrmDCAOSNNXdqst2P2LkrxMDMmIHqRQpShj1JVWQGBDWaB0ERrNqnXSQoLKAd+TzvJyDjFTSKErMpN4kVbQzUeUmPa/D2qXqpogZkBHq+s0D0nAUhYqZ5TDCiMU4xBq+/vQFosT6IydZtXQbAIIJkCZJ8f+nH5z2cgg88jV11X7NW1gqVYmIP1Ef9fN98kPti2U6vMqkeos0u7"+
"mXdVjmx3HnaoPUp24QCaEGhS19H5nl2wCmk/J+AMjSpNxBB+DLv3+2sDz6ElGaX68Nhr7fhCHJgDhr/pnXHlwH5vprB7SKAfgLrJIAtw6BgztAEicgykBSgmQGogzPG+eB9F3b7jJsWoEfnIN88nkFhguOODXeJXXZhFCfB161ITMAiEmASQ4KAPzhX8V02rA8+hKR7+WOIN1gpFn5XJug0G8AQPmYB67lxyF/tBwEug+WkNWO7iiOelbTW2PIz9vKUwYDyMefI5oGasCbLmHC4fqD6hg7k+UAktbjEgQFJJ5Qj/vdp5ckCXj2YwtxUmDYTmF+nkogjKvPtcktTDj0/49WxrurAYoQKucQyKd4AUhdqWjOYI1+kncgSXoTHETrcJgJqDlrE6UlHH"+
"H+TqzvE5OgmNG5E6ZqXwQBH/nCkk4DDhOMw0jBYYZRGo44Xb+Zz8e8TR1vfw9cIwJVdxDKDCCSeYmJahpnZiTnNbzqUtzoDRUODYaZiNs3SWrAmY6xTNRNhzTSGCyYBPnNV++q+ffsEhITjkl+0/lFlKy7xtFqHQZb9v3TSekoLkj+7fuXK8eu6VajGgn1WnOC3ntA/uhZBYcr+dafF0eFWbmHCYWGId2gatubqJGlQfngU7dp13BkElilpWvYeYYZIrUpToH5FLg8Xw+7XJD8x+3LZbNqY5FQb7cd0uzNSbYA6jUgGg4zIbfhMEWGG6RSDbJ0i60Mnh9U85hMvUUfBxJz2nbileDarlGEVOlmP3+xV4Za82k3SIjMXrz5fUJvlDrfZYpd9470Fp"+
"CPP1fOVlUS6hyOzAqtMsMl4mw9Ed8GEu0ipraBxAWHvl57skGHVNvA4U9KSCaTdkj+8xZVevGWaYeyEDEARE4q9+j1LFZd3qEHTmYNKjOPkDv8m5pOol1kG5nJuAYjSsrndSd25xJdtVwBVy+WkOi1ksmkfK2mkzJxN3/P/y5j+DQtz0HAcNYITxqO3jpI4LvzDldYpQGxk/FdQmI7ySYuot1Dh1T6467g0A6iwzTTSTQkbU4i9YYQvcUWKsx64ZF7zlWhyTZbcnsHiBlameFHkq0n5JK2zzN2EW510cxfD6HW1jfS413fMk/mw7j82SYkZk7iktxLc+egslFDz+1jU/fYdr9670KswHfP0JCjf3ITGMt738pnoyaOAd/+tKevX3TPahkJ+/MPXR"+
"JdZq0q12W808cZcPvX9ivX5fk+ZLoZMfa1hrGCQodbOnEP42qoFSZGwr7heehjgKN3gLjKSOwQy4bDDquW974FbzKBh0kBggmETNO1/7ugSd8fFl+bvn4Rnh9snIf4XhXiw0h9vHXvYQUCDUYXgF1fkx9IsHwlKJL1VqAmjlX5uQCWJhs0eDh20eWk96Um5DjgyJWQx/cfIl2tCscwB51r8HlBsD7Q8ipfG5r4/kMFycQ/VrKeZMBbv7oPpNa1WINe/9+Gucg58j+7uXwpP5DgCMCFbwYVF0kyVcFsuojWnq/WYVBhgnqboHeFY5ftf3q9DuJa79AJeSUEM+DwfB/+bFY/+ILACYf5NX8+XwMsvv9wbX2kKVl/7OvVP2aUKOfQP7cOXs/3q9cRBL"+
"gwVTf9uf66q0rs6NeTqjFY+UdTPlLOYeULhiOHo1eANFXpOhNLKuGQaVrAYQ48PcDMW+cXJn+sDQl+A62QmDNXAPDGe0K8+d7DdRez4XBcowmB3XxHA1MHiekWXSQWXn4iCHq1lH5WcPQ+xLLDK1dYpcMh7Ro6LNkEhjZIzHBHpqmC5OXm3EPnSW+8J1zLN9ZCwJprXQhgbt33IwD2AYRQXwsBXJgGOIqTNUh0uNX6OlcO6sy7mtC4wegdIMGkGjrVJecmJEUSfeHC2jtxMchafu9yA1A2gUQ7R92MVCeISeXOMICIAFwx4DAhWVKZR5kzWpfmVTeZTwHEKuwrlGXIkhhe7iAvfPps10C6wDGaA3Qe/nsVXgWT7u4R3bdfm2N0haPrY4r8pCav6f"+
"xi566hQ7+ma1rkE0thft8V6zEzlO4yNxzH/Lk61HKFrDKNS/eQElkSI12FCMO3zryTSV/g6GWI5Xs1f1AHHDq0coUpiw1+52IDJzFnuCTW10Ts/MNc1+jiGvq658afPzSgiCxIQkdYdmSFWvNvBZV1EFN7PhCtJLJ0BcpWkFl2ZjNYbWDwKbcdE/O1eP4YcGwKiT+fIw3zYdkQZv37L4fO2alOcBjhVeiAxNSVPCeZG48xc5I0igAErS+szDJVckLyTIoUm+A4CzB6BYj99INJtfyi4h7vOyzWEfzZrBMcc2uQ7QoS00U2SfjrZCfkYQMkewBWuaPMa56bzpm+995D/Oi/VFfb51PzNS7rsE67yL2vYPTaQVwboLo6hwnD3DEAdwXJJiUh/nze+p"+
"irNfeH+vkbyfosh2PPCrlsF7mdX1/bder1D6LTWyHsOxiDCrF0gh69r1xLmF682OgcPwzgnZp36V1AovMR77cUKH+wd5v29nx851dCJ8xNv2ve4TUIjRmtfSNpnxkzW/vW91wIfBwlCo5v/9I+fuifr1QS9Mq7ULGJ/2RdZChgDDIH6ToTddn4+I4Vu0cdIdl0dmriA77vA7BqrFpmq1x5RRdIYLlItMEbgNtGJIgkTqrOZGhgDBqQpnflmQOWlQGHHe+/XZO3dHKRPMySaYqjZAZvGkCmUadp4IWRZHeR/bz2Hd/rchHzWubT9c1myj3yRnE5HC98+gfF2ME4Vw5iylXQGnUIp7aBxAuCfJZI7RmJMyBdrTBtmbXSYVWdc0RNrkJYKwO5XBNOAm"+
"raN64k7up/1dZJEmRvtjkBIIYCxSBzkCbVDfBNQrRtQxPtItF9+4iASpl919mqrjDPWkLErmGWCccqVX2wyLXhZkROMZoQqzGGb5jZCmsG1iahVpfrutox74iMXMq+38xFdB4ya4HLBYcOsVQf3uNtyxwyBI1/2/PyRJY7+jnzLWHtUoZSB4dOsr+b50ShkYSvjBzK/N6Q2p3Hrkgma/ZKt/eRukUMa/iAbOMes5bQw15InNck1HV5iLnHo26N5mpLSPV2S37igiRyfG0TwFcpQFkKyjJwG8UBARJMtoNjWZOs7m3wu48DiV4QbIJjZrmG+TuvbuFg0Zav8Z2VWveQWQqS6ehPs+01II/+Zrf4tcvKdbgBBHWhVbjFu3ERznSEwwbb9Th0cJHZBp"+
"CYJe+rFCCZQaarSog1X7yLqRhSiCWEOpKgKyBtuci8IySu+zadKesCR9gQftkuEe3IQVYpVIl7GkOmCcg4f+2Fz7xLMBYDy0E0IGYzg8YBsIMkPTwmJOYq+WyDSYHZBnB0cUu9TqPBWKUqOZdZiixWgIDyNRBGYziA6DzEFXy15SLRFhBs8vVFBzjmDYO9boDPOjwPGxgXgE3gEAjLUEImMShdqRwkn+IVYsJEDNFBNslBADUjZLvI5Q1zli4zW4sW52jLg+YNyXvUcn3hsV7HBFmyQpYmCo7cPYTHhx4PGhDP95FGUWdQVh1Dm7DDY+pylIVx07NQdcm9+W4/txLtTSCIOoZnde6RZQlkGqvp3cI9fAjPZyL6CkiXmSwNhhlX12m/YeanbjDWJe"+
"5hCyTYcKCaj7mMcho6csAxdwAWNgBk3ieTpNJcbhkRZJpAxivINAVRVhwpJTwPX//cT3IWMuQkHdYfv0lLrC+k7XVwhC6zW02zXW15RGRci3k9ew6HuWLcN7PAd/38qCUkpTRFmkTGzJWiR3gTDq+GAIjtIuaCoQmJDrXaFDogmW0JCTp8nysUmjkG8OwYEwybfI99smKaRMo9sgQEWbqH8PD1z/0Uu4dDgws6K42nk2SjBnGrmnDGVYISdoSgrmy9CY69mmtrA2h/A7hdDputIiP3MN2DZ68GGWLZDrL41pXGEMIVZoUWDE1OMu+YvGvpEChy3GY1sERYL0B0hVhtcLRd45p73Aghs1i19SEFiPA8COFBTBiQwQCiwywNx2Jan4vINO2Ui4Q1Yc"+
"iswRXa3GPW8HNmDU4ys2Bd1QDjgmNp3HS3k3nLhEaZfyjnKOAQHgAB4U3w8md/nMOrGvX2hfnUDRUDkFTtaaL8753KsnnDNv2mZjuK+7vOVnXJP5oWEF2lM3bPXnPNJgRwFCcFIDJNET+zr2avMpWcC+HlM1cTvPLYTzMcQ57FIlJuYncENMtOuriImbRvCkTbekRX2OrgCK1bExxN1+eCAwCyNKmsmGs47OMcWANyEAD45N8R6X08q7Q83jmV6gQoG5aNOhfWJNFNg3DbNZCoBY46oFHjHq4k/W0qk3MTkPD691U5e75iLjwfYjKBN/Hx8qM/we4xZEAA4BNfVYhIUttFo9Q4LdaCpMuMlt2HahNIdhl27W8AhQsOExIXHABw50tvQsqk3C3oeZ"+
"hMpvCCAC995scYjvMQYj3xISF00wZXqLVJwm4m7S4oLqO6MOe6ddFezec6vNu3rqdrKLV07Gmqg0OmaRUOITCZBBA+w3GuAAGAJz8sRDApZ7b0Od/+N+Y7hWSF9t2Hs5av7Rlg7GG9J1e4BRh1kCwNOGzd+fJ3Kmsd3iSAmAR4+bMMx7kDBAAe+2A5/TudKEim/m4hiY4JyV5LMr+rbo5LWofDdI/DL7xRjaOFB88P8PKjPJ177nIQl/74q0Rm+5qjVTUfkWnq7PzeJScxwy3AvT5Rl6u4SurfcYCxiw4sLjBsOITnAcLDq5//WQZjTIBoSICyz1OcAcv7188D7NJZvQ4UM2RatcAxs0KqumT8OIDYeYatKhyqAPGVx36G4RgjIDYoGpY4A47uO6"+
"w8xu4E3wSJa5bIhKDNPVaW0+zCPYoDe+rA+OJ/VfpaCc/Dq4//PIOxA52rHTJFIv9PCggNSnx42CnkcrUwNfdl2KvhbcWFx9r11+IWBRhGN3a9Qu5NeOMTO0gHNwGAW/cebh1yocFRZjXJ+aohvOrqHm2O4XQN4eHVJ9g1GJANINGg2JAAOBYo8wZANCTbwNHFNdZyDaEmIhkOBuTYifyuHeVKjYNEKFuJdg2ngOby/cOnv52fAFXq5p//IkPBgJysowD1R0m3gXLF4SLaPZa7hMMKpxgOBuRUHMU147UpLPYpT13dow2M5V9+T+3+o/JgG4aCATnzRH6bXOXdWO/S3gZGExxHX/pvkEwrrsFwMCBnAovpJsC6o2yyKWvZAY46KFZ/s48sDpEZrU"+
"AZCgakF/rYs+VbtQYlToH4/sNK6LVJg4guYKTPRyCZIVtFyOIor76VuPkEg8GA9BiW2Kzzuu+wcnrUJpA0rWdEX7kFyrfAkgReeYzb7jAgA9JHv2K4SloWQ3aFpA6O6K//L98fnkHKFK898Qv8N2BAzhcobZC44FCOEauWnzLDq4//HL/2DMj5AyXW3VXeHzpnuGw40udDpOESMlEnOb36OFfXDknckLWjrj2oNmyZuxltGOyNWvKFFGmUJ+BZzHCwg4zHTVxOYgJDLwJpdIRkeZv73rKDjM9NLuxVw6o190gipKslw8GAjFNf/B0Fid4THx8dle7xNUK6CrmlJwPCkEx9rHUylNkKLz7yboaDAWEBwPT1i0VJCr1IyOKYXxRO0ll20p7GIbJVhB"+
"ufuJtfV3YQllacAkQEyjKkCbsHA8KqiIgAItVBPUv5BWGxbH3kL1L67SduEb8SLBaLxWKxWCwWi8VisVgsFovFYrFYLBaLxWKxWCwWi8VisVgsFovFYrFYLBaLxWKxWCwWi8VisVgsFovFqtf/A2+YZzjD7t11AAAAAElFTkSuQmCC"


let kImgBase64=""
