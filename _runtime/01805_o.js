// === Module 1805: o ===

// Module 1805 (o)
import t from "t" /* 1665 */;

require = arg1;
const dependencyMap = arg6;
const fn = function o(str) {
  let endsWithResult = str.endsWith("px");
  if (!endsWithResult) {
    const _isNaN = isNaN;
    const _Number = Number;
    endsWithResult = !isNaN(Number(str));
  }
  return endsWithResult;
};
fn.__closure = {};
fn.__workletHash = 6091944631530;
fn.__initData = { code: "function pnpm_processBoxShadowTs1(value){return value.endsWith('px')||!isNaN(Number(value));}" };
function parseBoxShadowString(str) {
  const items = [];
  const parts = str.split(/,(?![^()]*\))/);
  const mapped = parts.map((item, index) => item.trim());
  const found = mapped.filter((item, index) => "" !== item);
  const iter = found[Symbol.iterator]();
  str = iter.next();
  while (iter !== undefined) {
    let obj = { offsetX: 0, offsetY: 0 };
    let tmp2 = null;
    let tmp3 = null;
    let flag = false;
    let num = 0;
    let parts1 = str.split(/\s+(?![^(]*\))/);
    for (const item10041 of parts1) {
      if (fn(item10041)) {
        if (0 === num) {
          tmp2 = item10041;
          num = num + 1;
        } else if (1 === num) {
          if (flag) {
            obj2.return();
            let items1 = [];
            iter.return();
            return items1;
          } else {
            tmp3 = item10041;
            num = num + 1;
          }
        } else if (2 === num) {
          if (flag) {
            obj2.return();
            let items2 = [];
            iter.return();
            return items2;
          } else {
            obj.blurRadius = item10041;
            num = num + 1;
          }
        } else if (3 === num) {
          if (flag) {
            obj2.return();
            let items3 = [];
            iter.return();
            return items3;
          } else {
            obj.spreadDistance = item10041;
            num = num + 1;
          }
        } else {
          obj2.return();
          let items4 = [];
          iter.return();
          return items4;
        }
        continue;
      } else if ("inset" === item10041) {
        if (obj.inset) {
          obj2.return();
          let items5 = [];
          iter.return();
          return items5;
        } else {
          if (null !== tmp2) {
            flag = true;
          }
          obj.inset = true;
          continue;
        }
      } else if (obj.color) {
        obj2.return();
        let items6 = [];
        iter.return();
        return items6;
      } else {
        if (null != tmp2) {
          flag = true;
        }
        obj.color = item10041;
      }
      continue;
    }
    if (null !== tmp2) {
      if (null !== tmp3) {
        obj.offsetX = tmp2;
        obj.offsetY = tmp3;
        let arr = items.push(obj);
        continue;
      }
    }
    let items7 = [];
    iter.return();
    return items7;
  }
  return items;
}
parseBoxShadowString.__closure = { isLength: fn };
parseBoxShadowString.__workletHash = 13799106280870;
parseBoxShadowString.__initData = { code: "function parseBoxShadowString_Pnpm_processBoxShadowTs2(rawBoxShadows){const{isLength}=this.__closure;const result=[];for(const rawBoxShadow of rawBoxShadows.split(/,(?![^()]*\\))/).map(function(bS){return bS.trim();}).filter(function(bS){return bS!=='';})){const boxShadow={offsetX:0,offsetY:0};let offsetX=null;let offsetY=null;let keywordDetectedAfterLength=false;let lengthCount=0;const args=rawBoxShadow.split(/\\s+(?![^(]*\\))/);for(const arg of args){if(isLength(arg)){switch(lengthCount){case 0:offsetX=arg;lengthCount++;break;case 1:if(keywordDetectedAfterLength){return[];}offsetY=arg;lengthCount++;break;case 2:if(keywordDetectedAfterLength){return[];}boxShadow.blurRadius=arg;lengthCount++;break;case 3:if(keywordDetectedAfterLength){return[];}boxShadow.spreadDistance=arg;lengthCount++;break;default:return[];}}else if(arg==='inset'){if(boxShadow.inset){return[];}if(offsetX!==null){keywordDetectedAfterLength=true;}boxShadow.inset=true;continue;}else{if(boxShadow.color){return[];}if(offsetX!=null){keywordDetectedAfterLength=true;}boxShadow.color=arg;continue;}}if(offsetX===null||offsetY===null){return[];}boxShadow.offsetX=offsetX;boxShadow.offsetY=offsetY;result.push(boxShadow);}return result;}" };
function parseLength(str) {
  const match = /([+-]?\d*(\.\d+)?)([\w\W]+)?/g.exec(str);
  let NumberResult = null;
  if (match) {
    if (typeof fn !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let endsWithResult = str.endsWith("px");
    if (!endsWithResult) {
      const _isNaN = isNaN;
      const _Number = Number;
      endsWithResult = !isNaN(Number(str));
    }
    NumberResult = null;
    if (endsWithResult) {
      const _Number2 = Number;
      NumberResult = Number(match[1]);
    }
  }
  return NumberResult;
}
parseLength.__closure = { isLength: fn };
parseLength.__workletHash = 16787390997763;
parseLength.__initData = { code: "function parseLength_Pnpm_processBoxShadowTs3(length){const{isLength}=this.__closure;const argsWithUnitsRegex=/([+-]?\\d*(\\.\\d+)?)([\\w\\W]+)?/g;const match=argsWithUnitsRegex.exec(length);if(!match||!isLength(length)){return null;}return Number(match[1]);}" };
function processBoxShadow(boxShadow) {
  const items = [];
  if (null === boxShadow.boxShadow) {
    return items;
  } else {
    if (typeof str === "string") {
      let tmp8 = parseBoxShadowString(str.replace(/\n/g, " "));
    } else {
      const _Array = Array;
      tmp8 = str;
      if (!Array.isArray(str)) {
        const _JSON = JSON;
        const _HermesInternal = HermesInternal;
        const reanimatedError = new t.ReanimatedError("Box shadow value must be an array of shadow objects or a string. Received: " + JSON.stringify(str));
        throw reanimatedError;
      }
    }
    const iter = tmp8[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp13 = nextResult;
      let obj = { offsetX: 0, offsetY: 0 };
      for (const key10047 in nextResult) {
        if ("offsetX" === key10047) {
          if (typeof tmp13.offsetX === "string") {
            let offsetX = parseLength(tmp13.offsetX);
          } else {
            offsetX = tmp13.offsetX;
          }
          if (null === offsetX) {
            let items1 = [];
            iter.return();
            return items1;
          } else {
            obj.offsetX = tmp44;
            continue;
          }
        } else {
          if ("offsetY" === key10047) {
            if (typeof tmp13.offsetY === "string") {
              let offsetY = parseLength(tmp13.offsetY);
            } else {
              offsetY = tmp13.offsetY;
            }
            if (null === offsetY) {
              let items2 = [];
              iter.return();
              return items2;
            } else {
              obj.offsetY = tmp37;
              continue;
            }
          } else {
            if ("spreadDistance" === key10047) {
              if (typeof tmp13.spreadDistance === "string") {
                let spreadDistance = parseLength(tmp13.spreadDistance);
              } else {
                spreadDistance = tmp13.spreadDistance;
              }
              if (null === spreadDistance) {
                let items3 = [];
                iter.return();
                return items3;
              } else {
                obj.spreadDistance = tmp30;
                continue;
              }
            } else {
              if ("blurRadius" === key10047) {
                if (typeof tmp13.blurRadius === "string") {
                  let blurRadius = parseLength(tmp13.blurRadius);
                } else {
                  blurRadius = tmp13.blurRadius;
                }
                let tmp22 = blurRadius;
                if (null !== blurRadius) {
                  if (tmp22 >= 0) {
                    obj.blurRadius = tmp22;
                    continue;
                  }
                }
                let items4 = [];
                iter.return();
                return items4;
              } else {
                if ("color" === key10047) {
                  obj.color = tmp13.color;
                  continue;
                } else {
                  if ("inset" !== key10047) {
                    continue;
                  } else {
                    obj.inset = tmp13.inset;
                    continue;
                  }
                  continue;
                }
                continue;
              }
              continue;
            }
            continue;
          }
          continue;
        }
        continue;
      }
      let arr = items.push(obj);
      continue;
    }
    boxShadow.boxShadow = items;
  }
}
processBoxShadow.__closure = { parseBoxShadowString, parseLength };
processBoxShadow.__workletHash = 5021783745910;
processBoxShadow.__initData = { code: "function processBoxShadow_Pnpm_processBoxShadowTs4(props){const{parseBoxShadowString,parseLength}=this.__closure;const result=[];const rawBoxShadows=props.boxShadow;if(rawBoxShadows===null){return result;}let boxShadowList;if(typeof rawBoxShadows==='string'){boxShadowList=parseBoxShadowString(rawBoxShadows.replace(/\\n/g,' '));}else if(Array.isArray(rawBoxShadows)){boxShadowList=rawBoxShadows;}else{throw new ReanimatedError(\"Box shadow value must be an array of shadow objects or a string. Received: \"+JSON.stringify(rawBoxShadows));}for(const rawBoxShadow of boxShadowList){const parsedBoxShadow={offsetX:0,offsetY:0};let value;for(const arg in rawBoxShadow){switch(arg){case'offsetX':value=typeof rawBoxShadow.offsetX==='string'?parseLength(rawBoxShadow.offsetX):rawBoxShadow.offsetX;if(value===null){return[];}parsedBoxShadow.offsetX=value;break;case'offsetY':value=typeof rawBoxShadow.offsetY==='string'?parseLength(rawBoxShadow.offsetY):rawBoxShadow.offsetY;if(value===null){return[];}parsedBoxShadow.offsetY=value;break;case'spreadDistance':value=typeof rawBoxShadow.spreadDistance==='string'?parseLength(rawBoxShadow.spreadDistance):rawBoxShadow.spreadDistance;if(value===null){return[];}parsedBoxShadow.spreadDistance=value;break;case'blurRadius':value=typeof rawBoxShadow.blurRadius==='string'?parseLength(rawBoxShadow.blurRadius):rawBoxShadow.blurRadius;if(value===null||value<0){return[];}parsedBoxShadow.blurRadius=value;break;case'color':parsedBoxShadow.color=rawBoxShadow.color;break;case'inset':parsedBoxShadow.inset=rawBoxShadow.inset;}}result.push(parsedBoxShadow);}props.boxShadow=result;}" };
arg5.processBoxShadow = processBoxShadow;