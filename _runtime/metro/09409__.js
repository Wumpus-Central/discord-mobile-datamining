// _runtime/metro/09409__.js
import combineFuncs from "../09407_combineFuncs.js";

const _mod9397 = getElementsByTagName(9397);
require = arg1;
const dependencyMap = arg6;
function isValidFeed(arg0) {
  let tmp = "rss" === arg0;
  if (!tmp) {
    tmp = "feed" === arg0;
  }
  if (!tmp) {
    tmp = "rdf:RDF" === arg0;
  }
  return tmp;
}
let closure_2 = ["url", "type", "lang"];
let closure_3 = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];

export function getFeed(children) {
  let getElementsByTagName = require;
  let trimmed4 = dependencyMap;
  let first = combineFuncs.getElementsByTagName(isValidFeed, children, true, 1)[0];
  if (!first) {
    return null;
  } else if ("feed" === first.name) {
    children = first.children;
    first = { type: "atom", items: null };
    let elements = combineFuncs.getElementsByTagName("entry", children);
    first.items = elements.map((children) => {
      children = children.children;
      const obj = { media: null };
      const elements = combineFuncs.getElementsByTagName("media:content", children);
      obj.media = elements.map((attribs) => {
        attribs = attribs.attribs;
        const obj = { medium: attribs.medium, isDefault: attribs.isDefault };
        for (let num = 0; num < length.length; num = num + 1) {
          let tmp = length[num];
          if (attribs[tmp]) {
            obj[tmp] = attribs[tmp];
          }
        }
        for (let num2 = 0; num2 < length2.length; num2 = num2 + 1) {
          let tmp3 = length2[num2];
          if (attribs[tmp3]) {
            let _parseInt = parseInt;
            obj[tmp3] = parseInt(attribs[tmp3], 10);
          }
        }
        if (attribs.expression) {
          obj.expression = attribs.expression;
        }
        return obj;
      });
      const trimmed = _mod9397.textContent(combineFuncs.getElementsByTagName("id", children, false, 1)).trim();
      if (trimmed) {
        obj.id = trimmed;
      }
      const str = _mod9397.textContent(combineFuncs.getElementsByTagName("id", children, false, 1));
      const trimmed1 = _mod9397.textContent(combineFuncs.getElementsByTagName("title", children, false, 1)).trim();
      if (trimmed1) {
        obj.title = trimmed1;
      }
      const first = combineFuncs.getElementsByTagName("link", children, true, 1)[0];
      let href;
      if (null !== first) {
        if (undefined !== first) {
          href = first.attribs.href;
        }
      }
      if (href) {
        obj.link = href;
      }
      const str2 = _mod9397.textContent(combineFuncs.getElementsByTagName("title", children, false, 1));
      let trimmed2 = _mod9397.textContent(combineFuncs.getElementsByTagName("summary", children, false, 1)).trim();
      if (!trimmed2) {
        trimmed2 = _mod9397.textContent(combineFuncs.getElementsByTagName("content", children, false, 1)).trim();
        const str5 = _mod9397.textContent(combineFuncs.getElementsByTagName("content", children, false, 1));
      }
      if (trimmed2) {
        obj.description = trimmed2;
      }
      const str3 = _mod9397.textContent(combineFuncs.getElementsByTagName("summary", children, false, 1));
      const trimmed3 = _mod9397.textContent(combineFuncs.getElementsByTagName("updated", children, false, 1)).trim();
      if (trimmed3) {
        const _Date = Date;
        const date = new Date(trimmed3);
        obj.pubDate = date;
      }
      return obj;
    });
    let trimmed = _mod9397.textContent(combineFuncs.getElementsByTagName("id", children, false, 1)).trim();
    if (trimmed) {
      first.id = trimmed;
    }
    const str16 = _mod9397.textContent(combineFuncs.getElementsByTagName("id", children, false, 1));
    let trimmed1 = _mod9397.textContent(combineFuncs.getElementsByTagName("title", children, false, 1)).trim();
    if (trimmed1) {
      first.title = trimmed1;
    }
    const first1 = combineFuncs.getElementsByTagName("link", children, true, 1)[0];
    let href;
    if (null !== first1) {
      if (undefined !== first1) {
        href = first1.attribs.href;
      }
    }
    if (href) {
      first.link = href;
    }
    const str18 = _mod9397.textContent(combineFuncs.getElementsByTagName("title", children, false, 1));
    let trimmed2 = _mod9397.textContent(combineFuncs.getElementsByTagName("subtitle", children, false, 1)).trim();
    if (trimmed2) {
      first.description = trimmed2;
    }
    const str21 = _mod9397.textContent(combineFuncs.getElementsByTagName("subtitle", children, false, 1));
    let trimmed3 = _mod9397.textContent(combineFuncs.getElementsByTagName("updated", children, false, 1)).trim();
    if (trimmed3) {
      const _Date2 = Date;
      let date = new Date(trimmed3);
      first.updated = date;
    }
    getElementsByTagName = combineFuncs.getElementsByTagName;
    const str23 = _mod9397.textContent(combineFuncs.getElementsByTagName("updated", children, false, 1));
    trimmed4 = _mod9397.textContent(getElementsByTagName("email", children, true, 1)).trim();
    if (trimmed4) {
      first.author = trimmed4;
    }
    const str25 = _mod9397.textContent(getElementsByTagName("email", children, true, 1));
  } else {
    const first2 = combineFuncs.getElementsByTagName("channel", first.children, true, 1)[0];
    let children1;
    if (null !== first2) {
      if (undefined !== first2) {
        children1 = first2.children;
      }
    }
    if (null === children1) {
      children1 = [];
    }
    let obj = { type: first.name.substr(0, 3), id: "", items: null };
    const elements1 = combineFuncs.getElementsByTagName("item", first.children);
    obj.items = elements1.map((children) => {
      children = children.children;
      let obj = { media: null };
      const elements = combineFuncs.getElementsByTagName("media:content", children);
      obj.media = elements.map((attribs) => {
        attribs = attribs.attribs;
        const obj = { medium: attribs.medium, isDefault: attribs.isDefault };
        for (let num = 0; num < length.length; num = num + 1) {
          let tmp = length[num];
          if (attribs[tmp]) {
            obj[tmp] = attribs[tmp];
          }
        }
        for (let num2 = 0; num2 < length2.length; num2 = num2 + 1) {
          let tmp3 = length2[num2];
          if (attribs[tmp3]) {
            let _parseInt = parseInt;
            obj[tmp3] = parseInt(attribs[tmp3], 10);
          }
        }
        if (attribs.expression) {
          obj.expression = attribs.expression;
        }
        return obj;
      });
      const trimmed = _mod9397.textContent(combineFuncs.getElementsByTagName("guid", children, false, 1)).trim();
      if (trimmed) {
        obj.id = trimmed;
      }
      const str = _mod9397.textContent(combineFuncs.getElementsByTagName("guid", children, false, 1));
      const trimmed1 = _mod9397.textContent(combineFuncs.getElementsByTagName("title", children, false, 1)).trim();
      if (trimmed1) {
        obj.title = trimmed1;
      }
      const str2 = _mod9397.textContent(combineFuncs.getElementsByTagName("title", children, false, 1));
      const trimmed2 = _mod9397.textContent(combineFuncs.getElementsByTagName("link", children, false, 1)).trim();
      if (trimmed2) {
        obj.link = trimmed2;
      }
      const str3 = _mod9397.textContent(combineFuncs.getElementsByTagName("link", children, false, 1));
      const trimmed3 = _mod9397
        .textContent(combineFuncs.getElementsByTagName("description", children, false, 1))
        .trim();
      if (trimmed3) {
        obj.description = trimmed3;
      }
      const str4 = _mod9397.textContent(combineFuncs.getElementsByTagName("description", children, false, 1));
      let trimmed4 = _mod9397.textContent(combineFuncs.getElementsByTagName("pubDate", children, false, 1)).trim();
      if (!trimmed4) {
        trimmed4 = _mod9397.textContent(combineFuncs.getElementsByTagName("dc:date", children, false, 1)).trim();
        const str7 = _mod9397.textContent(combineFuncs.getElementsByTagName("dc:date", children, false, 1));
      }
      if (trimmed4) {
        const _Date = Date;
        const date = new Date(trimmed4);
        obj.pubDate = date;
      }
      return obj;
    });
    const trimmed5 = _mod9397.textContent(combineFuncs.getElementsByTagName("title", children1, false, 1)).trim();
    if (trimmed5) {
      obj.title = trimmed5;
    }
    let str5 = _mod9397.textContent(combineFuncs.getElementsByTagName("title", children1, false, 1));
    const trimmed6 = _mod9397.textContent(combineFuncs.getElementsByTagName("link", children1, false, 1)).trim();
    if (trimmed6) {
      obj.link = trimmed6;
    }
    let str7 = _mod9397.textContent(combineFuncs.getElementsByTagName("link", children1, false, 1));
    const trimmed7 = _mod9397.textContent(combineFuncs.getElementsByTagName("description", children1, false, 1)).trim();
    if (trimmed7) {
      obj.description = trimmed7;
    }
    const str9 = _mod9397.textContent(combineFuncs.getElementsByTagName("description", children1, false, 1));
    const trimmed8 = _mod9397
      .textContent(combineFuncs.getElementsByTagName("lastBuildDate", children1, false, 1))
      .trim();
    if (trimmed8) {
      let _Date = Date;
      const date1 = new Date(trimmed8);
      obj.updated = date1;
    }
    const str11 = _mod9397.textContent(combineFuncs.getElementsByTagName("lastBuildDate", children1, false, 1));
    const trimmed9 = _mod9397
      .textContent(combineFuncs.getElementsByTagName("managingEditor", children1, true, 1))
      .trim();
    if (trimmed9) {
      obj.author = trimmed9;
    }
    const str13 = _mod9397.textContent(combineFuncs.getElementsByTagName("managingEditor", children1, true, 1));
  }
}
