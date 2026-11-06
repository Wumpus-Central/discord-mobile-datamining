// _runtime/metro/13112__.js
import _mod13027 from "13027__.js";

const Ident = _mod13027.TYPE.Ident;
const String = _mod13027.TYPE.String;
const Number = _mod13027.TYPE.Number;
const Function = _mod13027.TYPE.Function;
const Url = _mod13027.TYPE.Url;
const Hash = _mod13027.TYPE.Hash;
const Dimension = _mod13027.TYPE.Dimension;
const Percentage = _mod13027.TYPE.Percentage;
const LeftParenthesis = _mod13027.TYPE.LeftParenthesis;
const LeftSquareBracket = _mod13027.TYPE.LeftSquareBracket;
const Comma = _mod13027.TYPE.Comma;
const Delim = _mod13027.TYPE.Delim;

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
    const obj3 = _mod13027;
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
    obj = _mod13027;
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
}
