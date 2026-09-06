// _runtime/metro/00191__.js
let c0 = "<unknown>";
const re1 =
  /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|rsc|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
const re2 = /\((\S*)(?::(\d+))(?::(\d+))\)/;
const re3 =
  /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|rsc|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
const re4 =
  /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|rsc|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
const re5 = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
const re6 = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
const re7 = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;

export const parse = function parse(str) {
  let parts = str.split("\n");
  return parts.reduce((arr, item) => {
    const match = regex.exec(item);
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
      let obj = { file: tmp7, methodName: match[1] || closure_1_0, arguments: null, lineNumber: null, column: null };
      if (tmp3) {
        const items = [match[2]];
        let items1 = items;
      } else {
        items1 = [];
      }
      obj.arguments = items1;
      let tmp8 = null;
      if (match[3]) {
        tmp8 = +match[3];
      }
      obj.lineNumber = tmp8;
      let tmp9 = null;
      if (match[4]) {
        tmp9 = +match[4];
      }
      obj.column = tmp9;
      tmp2 = obj;
    }
    if (!tmp2) {
      const match2 = regex3.exec(item);
      let tmp12 = null;
      if (match2) {
        obj = {
          file: match2[2],
          methodName: match2[1] || closure_1_0,
          arguments: [],
          lineNumber: +match2[3],
          column: null,
        };
        let tmp13 = null;
        if (match2[4]) {
          tmp13 = +match2[4];
        }
        obj.column = tmp13;
        tmp12 = obj;
      }
      tmp2 = tmp12;
    }
    if (!tmp2) {
      const match3 = regex4.exec(item);
      let tmp16 = null;
      if (match3) {
        let tmp17 = match3[3];
        if (tmp17) {
          tmp17 = match3[3].indexOf(" > eval") > -1;
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
        obj = {
          file: match3[3],
          methodName: match3[1] || closure_1_0,
          arguments: null,
          lineNumber: null,
          column: null,
        };
        if (match3[2]) {
          let parts = match3[2].split(",");
        } else {
          parts = [];
        }
        obj.arguments = parts;
        let tmp20 = null;
        if (match3[4]) {
          tmp20 = +match3[4];
        }
        obj.lineNumber = tmp20;
        let tmp21 = null;
        if (match3[5]) {
          tmp21 = +match3[5];
        }
        obj.column = tmp21;
        tmp16 = obj;
      }
      tmp2 = tmp16;
    }
    if (!tmp2) {
      const match5 = regex7.exec(item);
      let tmp24 = null;
      if (match5) {
        const obj1 = {
          file: match5[2],
          methodName: match5[1] || closure_1_0,
          arguments: [],
          lineNumber: +match5[3],
          column: null,
        };
        let tmp25 = null;
        if (match5[4]) {
          tmp25 = +match5[4];
        }
        obj1.column = tmp25;
        tmp24 = obj1;
      }
      tmp2 = tmp24;
    }
    if (!tmp2) {
      const match6 = regex6.exec(item);
      let tmp28 = null;
      if (match6) {
        const obj2 = {
          file: match6[3],
          methodName: match6[1] || closure_1_0,
          arguments: [],
          lineNumber: +match6[4],
          column: null,
        };
        let tmp29 = null;
        if (match6[5]) {
          tmp29 = +match6[5];
        }
        obj2.column = tmp29;
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
