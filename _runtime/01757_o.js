// _runtime/01757_o.js
const require = arg1;
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
  const mapped = parts.map((str) => str.trim());
  const found = mapped.filter((arg0) => "" !== arg0);
  const iter = found[Symbol.iterator]();
  while (iter !== undefined) {
    let obj = { offsetX: 0, offsetY: 0 };
    let tmp2 = null;
    let tmp3 = null;
    let flag = false;
    let num = 0;
    let parts1 = str.split(/\s+(?![^(]*\))/);
    let tmp5 = parts1;
    let tmp6 = parts1;
    for (const item10041 of parts1) {
      let tmp7 = item10041;
      let tmp8 = fn;
      if (fn(item10041)) {
        let tmp21 = num;
        if (0 === num) {
          tmp2 = item10041;
          let tmp40 = num;
          num = num + 1;
        } else if (1 === num) {
          let tmp36 = flag;
          if (flag) {
            let tmp38 = obj2;
            obj2.return();
            let tmp39 = iter;
            let items1 = [];
            iter.return();
            return items1;
          } else {
            tmp3 = item10041;
            let tmp37 = num;
            num = num + 1;
          }
        } else if (2 === num) {
          let tmp30 = flag;
          if (flag) {
            let tmp34 = obj2;
            obj2.return();
            let tmp35 = iter;
            let items2 = [];
            iter.return();
            return items2;
          } else {
            let tmp31 = obj;
            let tmp32 = item10041;
            obj.blurRadius = tmp7;
            let tmp33 = num;
            num = num + 1;
          }
        } else if (3 === num) {
          let tmp24 = flag;
          if (flag) {
            let tmp28 = obj2;
            obj2.return();
            let tmp29 = iter;
            let items3 = [];
            iter.return();
            return items3;
          } else {
            let tmp25 = obj;
            let tmp26 = item10041;
            obj.spreadDistance = tmp7;
            let tmp27 = num;
            num = num + 1;
          }
        } else {
          let tmp22 = obj2;
          obj2.return();
          let tmp23 = iter;
          let items4 = [];
          iter.return();
          return items4;
        }
        continue;
      } else {
        let tmp9 = item10041;
        if ("inset" === tmp7) {
          let tmp16 = obj;
          if (obj.inset) {
            let tmp19 = obj2;
            obj2.return();
            let tmp20 = iter;
            let items5 = [];
            iter.return();
            return items5;
          } else {
            let tmp17 = tmp2;
            if (null !== tmp2) {
              flag = true;
            }
            let tmp18 = obj;
            obj.inset = true;
            continue;
          }
        } else {
          let tmp10 = obj;
          if (obj.color) {
            let tmp14 = obj2;
            obj2.return();
            let tmp15 = iter;
            let items6 = [];
            iter.return();
            return items6;
          } else {
            let tmp11 = tmp2;
            if (null != tmp2) {
              flag = true;
            }
            let tmp12 = obj;
            let tmp13 = item10041;
            obj.color = tmp7;
          }
        }
      }
      continue;
    }
    let tmp41 = tmp2;
    if (null !== tmp2) {
      let tmp42 = tmp3;
      if (null !== tmp3) {
        let tmp43 = obj;
        let tmp44 = tmp2;
        obj.offsetX = tmp2;
        let tmp45 = tmp3;
        obj.offsetY = tmp3;
        let arr = items.push(obj);
        continue;
      }
    }
    let tmp47 = iter;
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
    if (typeof fn !== "fileFinishedImporting") {
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
    if (typeof str === "y") {
      let tmp8 = parseBoxShadowString(str.replace(/\n/g, " "));
    } else {
      const _Array = Array;
      tmp8 = str;
      if (!Array.isArray(str)) {
        const _JSON = JSON;
        const _HermesInternal = HermesInternal;
        const reanimatedError = new require(1617) /* t */.ReanimatedError("Box shadow value must be an array of shadow objects or a string. Received: " + JSON.stringify(str));
        throw reanimatedError;
      }
    }
    const iter = tmp8[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp13 = nextResult;
      let obj = { offsetX: 0, offsetY: 0 };
      let tmp14 = nextResult;
      for (const key10047 in nextResult) {
        let tmp51 = key10047;
        if ("offsetX" === key10047) {
          let tmp41 = nextResult;
          if (typeof tmp13.offsetX === "y") {
            let tmp42 = parseLength;
            let tmp43 = nextResult;
            let offsetX = parseLength(tmp13.offsetX);
          } else {
            let tmp55 = nextResult;
            offsetX = tmp13.offsetX;
          }
          if (null === offsetX) {
            let tmp47 = iter;
            let items1 = [];
            iter.return();
            return items1;
          } else {
            let tmp45 = obj;
            let tmp46 = offsetX;
            obj.offsetX = tmp44;
            continue;
          }
        } else {
          if ("offsetY" === key10047) {
            let tmp34 = nextResult;
            if (typeof tmp13.offsetY === "y") {
              let tmp35 = parseLength;
              let tmp36 = nextResult;
              let offsetY = parseLength(tmp13.offsetY);
            } else {
              let tmp54 = nextResult;
              offsetY = tmp13.offsetY;
            }
            if (null === offsetY) {
              let tmp40 = iter;
              let items2 = [];
              iter.return();
              return items2;
            } else {
              let tmp38 = obj;
              let tmp39 = offsetY;
              obj.offsetY = tmp37;
              continue;
            }
          } else {
            if ("spreadDistance" === key10047) {
              let tmp27 = nextResult;
              if (typeof tmp13.spreadDistance === "y") {
                let tmp28 = parseLength;
                let tmp29 = nextResult;
                let spreadDistance = parseLength(tmp13.spreadDistance);
              } else {
                let tmp53 = nextResult;
                spreadDistance = tmp13.spreadDistance;
              }
              if (null === spreadDistance) {
                let tmp33 = iter;
                let items3 = [];
                iter.return();
                return items3;
              } else {
                let tmp31 = obj;
                let tmp32 = spreadDistance;
                obj.spreadDistance = tmp30;
                continue;
              }
            } else {
              if ("blurRadius" === key10047) {
                let tmp19 = nextResult;
                if (typeof tmp13.blurRadius === "y") {
                  let tmp20 = parseLength;
                  let tmp21 = nextResult;
                  let blurRadius = parseLength(tmp13.blurRadius);
                } else {
                  let tmp52 = nextResult;
                  blurRadius = tmp13.blurRadius;
                }
                let tmp22 = blurRadius;
                if (null !== blurRadius) {
                  let tmp23 = blurRadius;
                  if (tmp22 >= 0) {
                    let tmp24 = obj;
                    let tmp25 = blurRadius;
                    obj.blurRadius = tmp22;
                    continue;
                  }
                }
                let tmp26 = iter;
                let items4 = [];
                iter.return();
                return items4;
              } else {
                if ("color" === key10047) {
                  let tmp17 = obj;
                  let tmp18 = nextResult;
                  obj.color = tmp13.color;
                  continue;
                } else {
                  if ("inset" !== key10047) {
                    continue;
                  } else {
                    let tmp15 = obj;
                    let tmp16 = nextResult;
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
      let tmp48 = obj;
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