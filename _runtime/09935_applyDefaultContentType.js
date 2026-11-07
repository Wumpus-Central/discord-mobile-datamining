// === Module 9935: applyDefaultContentType ===

// Module 9935 (applyDefaultContentType)
let items = [{ code: "(function applyDefaultContentType_Pnpm_headersJs1(headers,contentType){if(!contentType)return;for(let i=0;i<headers.length;i++){if(headers[i].key.toLowerCase()==='content-type')return;}headers.push({key:'Content-Type',value:contentType});})" }];
[tmp2] = items;
function applyDefaultContentType(arr, contentType) {
  if (contentType) {
    let num = 0;
    if (0 < arr.length) {
      while ("content-type" !== str2.toLowerCase()) {
        num = num + 1;
      }
    }
    const entry = { key: "Content-Type", value: contentType };
    arr = arr.push(entry);
  }
}
applyDefaultContentType.__workletHash = 11094575926281;
applyDefaultContentType.__initData = tmp2;
const items1 = [{ code: "(function applyCacheHeaders_Pnpm_headersJs2(headers,cache){if(cache==='no-store'){headers.push({key:'Cache-Control',value:'no-store'});}else if(cache==='no-cache'){headers.push({key:'Cache-Control',value:'no-cache'});}else if(cache==='reload'){headers.push({key:'Cache-Control',value:'no-cache'});headers.push({key:'Pragma',value:'no-cache'});}})" }];
[tmp3] = items1;
function applyCacheHeaders(arr, cache) {
  if ("no-store" === cache) {
    arr = arr.push({ key: "Cache-Control", value: "no-store" });
  } else if ("no-cache" === cache) {
    arr.push({ key: "Cache-Control", value: "no-cache" });
  } else if ("reload" === cache) {
    arr.push({ key: "Cache-Control", value: "no-cache" });
    arr.push({ key: "Pragma", value: "no-cache" });
  }
}
applyCacheHeaders.__workletHash = 14104984835993;
applyCacheHeaders.__initData = tmp3;
const items2 = [{ code: "(function isTokenChar_Pnpm_headersJs3(c){return c>=0x61&&c<=0x7a||c>=0x41&&c<=0x5a||c>=0x30&&c<=0x39||c===0x2d||c===0x5f||c===0x2e||c===0x21||c>=0x23&&c<=0x27||c===0x2a||c===0x2b||c===0x5e||c===0x60||c===0x7c||c===0x7e;})" }];
[tmp4] = items2;
function isTokenChar(arg0) {
  let tmp = arg0 >= 97;
  if (tmp) {
    tmp = arg0 <= 122;
  }
  if (!tmp) {
    let tmp2 = arg0 >= 65;
    if (tmp2) {
      tmp2 = arg0 <= 90;
    }
    tmp = tmp2;
  }
  if (!tmp) {
    let tmp3 = arg0 >= 48;
    if (tmp3) {
      tmp3 = arg0 <= 57;
    }
    tmp = tmp3;
  }
  if (!tmp) {
    tmp = 45 === arg0;
  }
  if (!tmp) {
    tmp = 95 === arg0;
  }
  if (!tmp) {
    tmp = 46 === arg0;
  }
  if (!tmp) {
    tmp = 33 === arg0;
  }
  if (!tmp) {
    let tmp4 = arg0 >= 35;
    if (tmp4) {
      tmp4 = arg0 <= 39;
    }
    tmp = tmp4;
  }
  if (!tmp) {
    tmp = 42 === arg0;
  }
  if (!tmp) {
    tmp = 43 === arg0;
  }
  if (!tmp) {
    tmp = 94 === arg0;
  }
  if (!tmp) {
    tmp = 96 === arg0;
  }
  if (!tmp) {
    tmp = 124 === arg0;
  }
  if (!tmp) {
    tmp = 126 === arg0;
  }
  return tmp;
}
isTokenChar.__workletHash = 9226838643074;
isTokenChar.__initData = tmp4;
const items3 = [{ code: "(function isHttpWhitespace_Pnpm_headersJs4(c){return c===0x09||c===0x0a||c===0x0d||c===0x20;})" }];
[tmp5] = items3;
function isHttpWhitespace(arg0) {
  let tmp = 9 === arg0;
  if (!tmp) {
    tmp = 10 === arg0;
  }
  if (!tmp) {
    tmp = 13 === arg0;
  }
  if (!tmp) {
    tmp = 32 === arg0;
  }
  return tmp;
}
isHttpWhitespace.__workletHash = 5822261214044;
isHttpWhitespace.__initData = tmp5;
const items4 = [{ code: "(function normalizeAndValidateHeaders_Pnpm_headersJs5(headers){let[isTokenChar,isHttpWhitespace]=this.__closure;for(let i=0;i<headers.length;i++){const header=headers[i];const name=String(header.key);if(name.length===0)throw new TypeError('Invalid header name: \"\"');for(let j=0;j<name.length;j++){if(!isTokenChar(name.charCodeAt(j))){throw new TypeError(\"Invalid header name: \"+JSON.stringify(name));}}const raw=String(header.value);let start=0;let end=raw.length;while(start<end&&isHttpWhitespace(raw.charCodeAt(start)))start++;while(end>start&&isHttpWhitespace(raw.charCodeAt(end-1)))end--;for(let j=start;j<end;j++){const c=raw.charCodeAt(j);if(c===0x00||c===0x0a||c===0x0d){throw new TypeError(\"Invalid header value for \"+JSON.stringify(name));}}if(start!==0||end!==raw.length){headers[i]={key:name,value:raw.slice(start,end)};}}})" }, isTokenChar, isHttpWhitespace];
let c0;
let c1;
[tmp6, tmp7, tmp8] = items4;
function normalizeAndValidateHeaders(arr) {
  let num = 0;
  if (0 < arr.length) {
    const _String = String;
    const StringResult = String(arr[num].key);
    while (0 !== StringResult.length) {
      let num2 = 0;
      if (0 < StringResult.length) {
        while (_undefined(StringResult.charCodeAt(num2))) {
          num2 = num2 + 1;
          continue;
        }
        let _TypeError = TypeError;
        let _JSON = JSON;
        let _HermesInternal = HermesInternal;
        let str = "Invalid header name: ";
        let tmp4 = new.target;
        let tmp5 = new.target;
        let typeError = new TypeError("Invalid header name: " + JSON.stringify(StringResult));
        throw typeError;
      }
      let _String2 = String;
      let StringResult1 = String(iter.value);
      let length = StringResult1.length;
      let num3 = 0;
      if (0 < length) {
        let num4 = 0;
        num3 = 0;
        if (_undefined2(StringResult1.charCodeAt(0))) {
          let sum = num4 + 1;
          num3 = sum;
          while (sum < length) {
            num4 = sum;
            num3 = sum;
            if (!_undefined2(StringResult1.charCodeAt(sum))) {
              break;
            }
          }
        }
      }
      let tmp11 = length;
      if (length > num3) {
        let tmp13 = length;
        tmp11 = length;
        if (_undefined2(StringResult1.charCodeAt(length - 1))) {
          let diff = tmp13 - 1;
          tmp11 = diff;
          while (diff > num3) {
            tmp13 = diff;
            tmp11 = diff;
            if (!_undefined2(StringResult1.charCodeAt(diff - 1))) {
              break;
            }
          }
        }
      }
      let sum1 = num3;
      if (num3 < tmp11) {
        let charCodeAtResult = StringResult1.charCodeAt(sum1);
        while (0 !== charCodeAtResult) {
          if (10 === charCodeAtResult) {
            break;
          } else if (13 === charCodeAtResult) {
            break;
          } else {
            sum1 = sum1 + 1;
            continue;
          }
        }
        let _TypeError2 = TypeError;
        let _JSON2 = JSON;
        let _HermesInternal2 = HermesInternal;
        let str2 = "Invalid header value for ";
        let tmp20 = new.target;
        let tmp21 = new.target;
        let typeError1 = new TypeError("Invalid header value for " + JSON.stringify(StringResult));
        throw typeError1;
      }
      let tmp19 = 0 === num3;
      if (0 === num3) {
        tmp19 = tmp11 === StringResult1.length;
      }
      if (!tmp19) {
        let entry = { key: StringResult, value: StringResult1.slice(num3, tmp11) };
        arr[num] = entry;
      }
      num = num + 1;
    }
    const _TypeError3 = TypeError;
    const typeError2 = new TypeError("Invalid header name: \"\"");
    throw typeError2;
  }
}
const items5 = [tmp7, tmp8];
normalizeAndValidateHeaders.__closure = items5;
normalizeAndValidateHeaders.__workletHash = 16427400324830;
normalizeAndValidateHeaders.__initData = tmp6;
const items6 = [{ code: "(function headersToPairs_Pnpm_headersJs6(headers){if(!headers)return undefined;const pairs=[];if(headers instanceof Headers){headers.forEach(function(v,k){return pairs.push({key:k,value:v});});return pairs;}if(Array.isArray(headers)){for(const entry of headers){if(Array.isArray(entry)&&entry.length>=2){pairs.push({key:String(entry[0]),value:String(entry[1])});}else if(entry&&typeof entry==='object'&&'key'in entry&&'value'in entry){pairs.push(entry);}}return pairs;}if(typeof headers==='object'&&headers!==null){const hasForEach=typeof headers.forEach==='function';if(hasForEach){headers.forEach(function(v,k){return pairs.push({key:k,value:v});});return pairs;}else{const keys=Object.keys(headers);for(let i=0;i<keys.length;i++){const k=keys[i];const v=headers[k];if(v!==undefined){pairs.push({key:k,value:String(v)});}}return pairs;}}return pairs;})" }];
[tmp9] = items6;
function headersToPairs(headers1) {
  if (headers1) {
    items = [];
    const _Headers = Headers;
    if (headers1 instanceof Headers) {
      const item = headers1.forEach((value, key) => {
        const entry = { key, value };
        return items.push(entry);
      });
      return items;
    } else {
      const _Array = Array;
      if (Array.isArray(headers1)) {
        const iter = headers1[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let arr2 = nextResult;
          let _Array2 = Array;
          if (Array.isArray(nextResult)) {
            if (arr2.length >= 2) {
              let entry = { key: null, value: null };
              let _String2 = String;
              entry.key = String(arr2[0]);
              let _String3 = String;
              entry.value = String(arr2[1]);
              let arr = items.push(entry);
              continue;
            }
          }
          let tmp12 = nextResult;
          if (nextResult) {
            tmp12 = typeof arr2 === "object";
          }
          if (tmp12) {
            tmp12 = "key" in arr2;
          }
          if (tmp12) {
            tmp12 = "value" in arr2;
          }
          if (tmp12) {
            let arr3 = items.push(arr2);
          }
        }
        return items;
      } else {
        if (typeof headers1 === "object") {
          if (null !== headers1) {
            if (typeof headers1.forEach === "function") {
              const item1 = headers1.forEach((value, key) => {
                const entry = { key, value };
                return items.push(entry);
              });
              return items;
            } else {
              const _Object = Object;
              const keys = Object.keys(headers1);
              for (let num = 0; num < keys.length; num = num + 1) {
                let tmp2 = keys[num];
                let tmp3 = headers1[tmp2];
                if (undefined !== tmp3) {
                  let entry1 = { key: tmp2, value: null };
                  let _String = String;
                  entry1.value = String(tmp3);
                  let arr6 = items.push(entry1);
                }
              }
              return items;
            }
          }
        }
        return items;
      }
    }
  }
}
headersToPairs.__workletHash = 6673483528582;
headersToPairs.__initData = tmp9;
const items7 = [{ code: "(function headersToPairsPure_Pnpm_headersJs7(headers){if(!headers)return undefined;const pairs=[];if(Array.isArray(headers)){for(const entry of headers){if(Array.isArray(entry)&&entry.length>=2){pairs.push({key:String(entry[0]),value:String(entry[1])});}else if(entry&&typeof entry==='object'&&'key'in entry&&'value'in entry){pairs.push(entry);}}return pairs;}if(typeof headers==='object'&&headers!==null){const hasForEach=typeof headers.forEach==='function';if(hasForEach){headers.forEach(function(v,k){return pairs.push({key:k,value:v});});return pairs;}else{const keys=Object.keys(headers);for(let i=0;i<keys.length;i++){const k=keys[i];const v=headers[k];if(v!==undefined){pairs.push({key:k,value:String(v)});}}return pairs;}}return pairs;})" }];
[tmp10] = items7;
function headersToPairsPure(obj) {
  if (obj) {
    items = [];
    const _Array = Array;
    if (Array.isArray(obj)) {
      const iter = obj[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let arr2 = nextResult;
        let _Array2 = Array;
        if (Array.isArray(nextResult)) {
          if (arr2.length >= 2) {
            let entry = { key: null, value: null };
            let _String2 = String;
            entry.key = String(arr2[0]);
            let _String3 = String;
            entry.value = String(arr2[1]);
            let arr = items.push(entry);
            continue;
          }
        }
        let tmp12 = nextResult;
        if (nextResult) {
          tmp12 = typeof arr2 === "object";
        }
        if (tmp12) {
          tmp12 = "key" in arr2;
        }
        if (tmp12) {
          tmp12 = "value" in arr2;
        }
        if (tmp12) {
          let arr3 = items.push(arr2);
        }
      }
      return items;
    } else {
      if (typeof obj === "object") {
        if (null !== obj) {
          if (typeof obj.forEach === "function") {
            const item = obj.forEach((value, key) => {
              const entry = { key, value };
              return items.push(entry);
            });
            return items;
          } else {
            const _Object = Object;
            const keys = Object.keys(obj);
            for (let num = 0; num < keys.length; num = num + 1) {
              let tmp2 = keys[num];
              let tmp3 = obj[tmp2];
              if (undefined !== tmp3) {
                let entry1 = { key: tmp2, value: null };
                let _String = String;
                entry1.value = String(tmp3);
                let arr6 = items.push(entry1);
              }
            }
            return items;
          }
        }
      }
      return items;
    }
  }
}
headersToPairsPure.__workletHash = 10370947842975;
headersToPairsPure.__initData = tmp10;

export const TEXT_CONTENT_TYPE = "text/plain;charset=UTF-8";
export const FORM_CONTENT_TYPE = "application/x-www-form-urlencoded;charset=UTF-8";
export const BYTES_CONTENT_TYPE = "application/octet-stream";
export { applyDefaultContentType };
export { applyCacheHeaders };
export { normalizeAndValidateHeaders };
export { headersToPairs };
export { headersToPairsPure };