// === Module 191: parse ===

// Module 191 (parse)
let c0 = "<unknown>";
const re1 = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|rsc|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
const re2 = /\((\S*)(?::(\d+))(?::(\d+))\)/;
const re3 = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|rsc|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
const re4 = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|rsc|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
const re5 = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
const re6 = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
const re7 = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
arg5.parse = function parse(str) {
  let parts = str.split("\n");
  return parts.reduce((arr) => {
    const match = regex.exec(arg1);
    let tmp2 = null;
    if (match) {
      let tmp3 = match[2];
      if (tmp3) {
        arr = match[2];
        tmp3 = 0 === arr.indexOf("native");
      }
      let tmp4 = match[2];
      if (tmp4) {
        tmp4 = 0 === match[2].indexOf("eval");
        const arr2 = match[2];
      }
      const match1 = regex2.exec(match[2]);
      if (tmp4) {
        tmp4 = null != match1;
      }
      if (tmp4) {
        match[2] = match1[1];
        match[3] = match1[2];
        match[4] = match1[3];
      }
      let tmp7 = null;
      if (!tmp3) {
        tmp7 = match[2];
      }
      let obj = { file: null, methodName: null, arguments: null, lineNumber: null, column: null };
      obj[0] = tmp7;
      obj[1] = match[1] || closure_0;
      if (tmp3) {
        const items = [match[2]];
        let items1 = items;
      } else {
        items1 = [];
      }
      obj[2] = items1;
      let tmp8 = null;
      if (match[3]) {
        tmp8 = +match[3];
      }
      obj[3] = tmp8;
      let tmp9 = null;
      if (match[4]) {
        tmp9 = +match[4];
      }
      obj[4] = tmp9;
      tmp2 = obj;
    }
    if (!tmp2) {
      const match2 = regex3.exec(arg1);
      let tmp12 = null;
      if (match2) {
        obj = { file: null, methodName: null, arguments: null, lineNumber: null, column: null };
        obj[0] = match2[2];
        obj[1] = match2[1] || closure_0;
        obj[2] = [];
        obj[3] = +match2[3];
        let tmp13 = null;
        if (match2[4]) {
          tmp13 = +match2[4];
        }
        obj[4] = tmp13;
        tmp12 = obj;
      }
      tmp2 = tmp12;
    }
    if (!tmp2) {
      const match3 = regex4.exec(arg1);
      let tmp16 = null;
      if (match3) {
        let tmp17 = match3[3];
        if (tmp17) {
          tmp17 = match3[3].indexOf(" > eval") > -1;
          const arr5 = match3[3];
        }
        const match4 = regex5.exec(match3[3]);
        if (tmp17) {
          tmp17 = null != match4;
        }
        if (tmp17) {
          match3[3] = match4[1];
          match3[4] = match4[2];
          match3[5] = null;
        }
        obj = { file: null, methodName: null, arguments: null, lineNumber: null, column: null };
        obj[0] = match3[3];
        obj[1] = match3[1] || closure_0;
        if (match3[2]) {
          let parts = match3[2].split(",");
          const str4 = match3[2];
        } else {
          parts = [];
        }
        obj[2] = parts;
        let tmp20 = null;
        if (match3[4]) {
          tmp20 = +match3[4];
        }
        obj[3] = tmp20;
        let tmp21 = null;
        if (match3[5]) {
          tmp21 = +match3[5];
        }
        obj[4] = tmp21;
        tmp16 = obj;
      }
      tmp2 = tmp16;
    }
    if (!tmp2) {
      const match5 = regex7.exec(arg1);
      let tmp24 = null;
      if (match5) {
        obj1 = { file: null, methodName: null, arguments: null, lineNumber: null, column: null };
        obj1[0] = match5[2];
        obj1[1] = match5[1] || closure_0;
        obj1[2] = [];
        obj1[3] = +match5[3];
        let tmp25 = null;
        if (match5[4]) {
          tmp25 = +match5[4];
        }
        obj1[4] = tmp25;
        tmp24 = obj1;
      }
      tmp2 = tmp24;
    }
    if (!tmp2) {
      const match6 = regex6.exec(arg1);
      let tmp28 = null;
      if (match6) {
        const obj2 = { file: null, methodName: null, arguments: null, lineNumber: null, column: null };
        obj2[0] = match6[3];
        obj2[1] = match6[1] || closure_0;
        obj2[2] = [];
        obj2[3] = +match6[4];
        let tmp29 = null;
        if (match6[5]) {
          tmp29 = +match6[5];
        }
        obj2[4] = tmp29;
        tmp28 = obj2;
      }
      tmp2 = tmp28;
    }
    if (tmp2) {
      arr = arr.push(tmp2);
    }
    return arr;
  }, []);
};