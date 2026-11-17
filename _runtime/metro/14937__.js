// === Module 14937: ? ===

// Module 14937
import _mod14852 from "module_14852" /* 14852 */;

const Ident = _mod14852.TYPE.Ident;
const String = _mod14852.TYPE.String;
const Number = _mod14852.TYPE.Number;
const Function = _mod14852.TYPE.Function;
const Url = _mod14852.TYPE.Url;
const Hash = _mod14852.TYPE.Hash;
const Dimension = _mod14852.TYPE.Dimension;
const Percentage = _mod14852.TYPE.Percentage;
const LeftParenthesis = _mod14852.TYPE.LeftParenthesis;
const LeftSquareBracket = _mod14852.TYPE.LeftSquareBracket;
const Comma = _mod14852.TYPE.Comma;
const Delim = _mod14852.TYPE.Delim;

export default function defaultRecognizer(recognizer) {
  const self = this;
  const tokenType = this.scanner.tokenType;
  if (Hash === tokenType) {
    return self.Hash();
  } else if (Comma === tokenType) {
    recognizer.space = null;
    recognizer.ignoreWSAfter = true;
    return self.Operator();
  } else if (LeftParenthesis === tokenType) {
    return self.Parentheses(self.readSequence, recognizer.recognizer);
  } else if (LeftSquareBracket === tokenType) {
    return self.Brackets(self.readSequence, recognizer.recognizer);
  } else if (String === tokenType) {
    return self.String();
  } else if (Dimension === tokenType) {
    return self.Dimension();
  } else if (Percentage === tokenType) {
    return self.Percentage();
  } else if (Number === tokenType) {
    return self.Number();
  } else if (Function === tokenType) {
    const obj3 = _mod14852;
    if (obj3.cmpStr(self.scanner.source, self.scanner.tokenStart, self.scanner.tokenEnd, "url(")) {
      let UrlResult = self.Url();
    } else {
      UrlResult = self.Function(self.readSequence, recognizer.recognizer);
    }
    return UrlResult;
  } else if (Url === tokenType) {
    return self.Url();
  } else if (Ident === tokenType) {
    if (obj.cmpChar(self.scanner.source, self.scanner.tokenStart, 117)) {
      if (tmp3Result.cmpChar(self.scanner.source, self.scanner.tokenStart + 1, 43)) {
        let UnicodeRangeResult = self.UnicodeRange();
      }
      return UnicodeRangeResult;
    }
    UnicodeRangeResult = self.Identifier();
    obj = _mod14852;
  } else if (Delim === tokenType) {
    const source = self.scanner.source;
    const charCodeAtResult = source.charCodeAt(self.scanner.tokenStart);
    if (47 !== charCodeAtResult) {
      if (42 !== charCodeAtResult) {
        if (43 !== charCodeAtResult) {
          if (45 !== charCodeAtResult) {
            if (35 === charCodeAtResult) {
              self.error("Hex or identifier is expected", self.scanner.tokenStart + 1);
            }
          }
        }
      }
    }
    return self.Operator();
  }
};