// _runtime/09399_EntityLevel.js
const require = arg1;
const dependencyMap = arg6;
EntityLevel.EntityLevel = undefined;
EntityLevel.EncodingMode = undefined;
EntityLevel.decode = undefined;
EntityLevel.decodeStrict = undefined;
EntityLevel.encode = undefined;
EntityLevel.encodeXML = undefined;
EntityLevel.escape = undefined;
EntityLevel.escapeUTF8 = undefined;
EntityLevel.escapeAttribute = undefined;
EntityLevel.escapeText = undefined;
EntityLevel.encodeHTML = undefined;
EntityLevel.encodeNonAsciiHTML = undefined;
EntityLevel.encodeHTML4 = undefined;
EntityLevel.encodeHTML5 = undefined;
EntityLevel.EntityDecoder = undefined;
EntityLevel.DecodingMode = undefined;
EntityLevel.decodeXML = undefined;
EntityLevel.decodeHTML = undefined;
EntityLevel.decodeHTMLStrict = undefined;
EntityLevel.decodeHTMLAttribute = undefined;
EntityLevel.decodeHTML4 = undefined;
EntityLevel.decodeHTML5 = undefined;
EntityLevel.decodeHTML4Strict = undefined;
EntityLevel.decodeHTML5Strict = undefined;
EntityLevel.decodeXMLStrict = undefined;
EntityLevel = EntityLevel.EntityLevel;
if (!EntityLevel) {
  let obj = {};
  EntityLevel.EntityLevel = obj;
  EntityLevel = obj;
}
EntityLevel.XML = 0;
EntityLevel[0] = "XML";
EntityLevel.HTML = 1;
EntityLevel[1] = "HTML";
let EncodingMode = EntityLevel.EncodingMode;
if (!EncodingMode) {
  const obj2 = {};
  EntityLevel.EncodingMode = obj2;
  EncodingMode = obj2;
}
EncodingMode.UTF8 = 0;
EncodingMode[0] = "UTF8";
EncodingMode.ASCII = 1;
EncodingMode[1] = "ASCII";
EncodingMode.Extensive = 2;
EncodingMode[2] = "Extensive";
EncodingMode.Attribute = 3;
EncodingMode[3] = "Attribute";
EncodingMode.Text = 4;
EncodingMode[4] = "Text";
EntityLevel.decode = function decode(arr, arg1) {
  let XML = arg1;
  if (undefined === arg1) {
    XML = EntityLevel.XML;
  }
  let level = XML;
  if (typeof XML !== "number") {
    level = XML.level;
  }
  if (level === EntityLevel.HTML) {
    let mode;
    if (typeof XML === "object") {
      mode = XML.mode;
    }
    return require("metro/09389__.js").decodeHTML(arr, mode);
  } else {
    return require("metro/09389__.js").decodeXML(arr);
  }
};
EntityLevel.decodeStrict = function decodeStrict(arr, arg1) {
  let XML = arg1;
  if (undefined === arg1) {
    XML = EntityLevel.XML;
  }
  let XML2 = XML;
  if (typeof XML === "number") {
    const obj = { level: XML };
    XML2 = obj;
  }
  const mode = XML2.mode;
  if (!tmp2) {
    XML2.mode = require("metro/09389__.js").DecodingMode.Strict;
  }
  if (undefined === XML2) {
    XML2 = EntityLevel.XML;
  }
  let level = XML2;
  if (typeof XML2 !== "number") {
    level = XML2.level;
  }
  if (level === EntityLevel.HTML) {
    let mode1;
    if (typeof XML2 === "object") {
      mode1 = XML2.mode;
    }
    let decodeHTMLResult = require("metro/09389__.js").decodeHTML(arr, mode1);
  } else {
    decodeHTMLResult = require("metro/09389__.js").decodeXML(arr);
  }
  return decodeHTMLResult;
};
EntityLevel.encode = function encode(attribs, arg1) {
  let XML = arg1;
  if (undefined === arg1) {
    XML = EntityLevel.XML;
  }
  let tmp2 = XML;
  if (typeof XML === "number") {
    const obj = { level: XML };
    tmp2 = obj;
  }
  if (tmp2.mode === EncodingMode.UTF8) {
    let escapeUTF8Result = require("xmlReplacer").escapeUTF8(attribs);
  } else if (tmp2.mode === EncodingMode.Attribute) {
    escapeUTF8Result = require("xmlReplacer").escapeAttribute(attribs);
  } else if (tmp2.mode === EncodingMode.Text) {
    escapeUTF8Result = require("xmlReplacer").escapeText(attribs);
  } else if (tmp2.level === EntityLevel.HTML) {
    if (tmp2.mode === EncodingMode.ASCII) {
      let encodeNonAsciiHTMLResult = require("encodeHTMLTrieRe").encodeNonAsciiHTML(attribs);
    } else {
      encodeNonAsciiHTMLResult = require("encodeHTMLTrieRe").encodeHTML(attribs);
    }
  } else {
    escapeUTF8Result = require("xmlReplacer").encodeXML(attribs);
  }
  return escapeUTF8Result;
};
Object.defineProperty(EntityLevel, "encodeXML", {
  enumerable: true,
  get() {
    return require("xmlReplacer").encodeXML;
  },
});
Object.defineProperty(EntityLevel, "escape", {
  enumerable: true,
  get() {
    return require("xmlReplacer").escape;
  },
});
Object.defineProperty(EntityLevel, "escapeUTF8", {
  enumerable: true,
  get() {
    return require("xmlReplacer").escapeUTF8;
  },
});
Object.defineProperty(EntityLevel, "escapeAttribute", {
  enumerable: true,
  get() {
    return require("xmlReplacer").escapeAttribute;
  },
});
Object.defineProperty(EntityLevel, "escapeText", {
  enumerable: true,
  get() {
    return require("xmlReplacer").escapeText;
  },
});
Object.defineProperty(EntityLevel, "encodeHTML", {
  enumerable: true,
  get() {
    return require("encodeHTMLTrieRe").encodeHTML;
  },
});
Object.defineProperty(EntityLevel, "encodeNonAsciiHTML", {
  enumerable: true,
  get() {
    return require("encodeHTMLTrieRe").encodeNonAsciiHTML;
  },
});
Object.defineProperty(EntityLevel, "encodeHTML4", {
  enumerable: true,
  get() {
    return require("encodeHTMLTrieRe").encodeHTML;
  },
});
Object.defineProperty(EntityLevel, "encodeHTML5", {
  enumerable: true,
  get() {
    return require("encodeHTMLTrieRe").encodeHTML;
  },
});
Object.defineProperty(EntityLevel, "EntityDecoder", {
  enumerable: true,
  get() {
    return require("metro/09389__.js").EntityDecoder;
  },
});
Object.defineProperty(EntityLevel, "DecodingMode", {
  enumerable: true,
  get() {
    return require("metro/09389__.js").DecodingMode;
  },
});
Object.defineProperty(EntityLevel, "decodeXML", {
  enumerable: true,
  get() {
    return require("metro/09389__.js").decodeXML;
  },
});
Object.defineProperty(EntityLevel, "decodeHTML", {
  enumerable: true,
  get() {
    return require("metro/09389__.js").decodeHTML;
  },
});
Object.defineProperty(EntityLevel, "decodeHTMLStrict", {
  enumerable: true,
  get() {
    return require("metro/09389__.js").decodeHTMLStrict;
  },
});
Object.defineProperty(EntityLevel, "decodeHTMLAttribute", {
  enumerable: true,
  get() {
    return require("metro/09389__.js").decodeHTMLAttribute;
  },
});
Object.defineProperty(EntityLevel, "decodeHTML4", {
  enumerable: true,
  get() {
    return require("metro/09389__.js").decodeHTML;
  },
});
Object.defineProperty(EntityLevel, "decodeHTML5", {
  enumerable: true,
  get() {
    return require("metro/09389__.js").decodeHTML;
  },
});
Object.defineProperty(EntityLevel, "decodeHTML4Strict", {
  enumerable: true,
  get() {
    return require("metro/09389__.js").decodeHTMLStrict;
  },
});
Object.defineProperty(EntityLevel, "decodeHTML5Strict", {
  enumerable: true,
  get() {
    return require("metro/09389__.js").decodeHTMLStrict;
  },
});
Object.defineProperty(EntityLevel, "decodeXMLStrict", {
  enumerable: true,
  get() {
    return require("metro/09389__.js").decodeXML;
  },
});
