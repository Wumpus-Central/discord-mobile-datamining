// _runtime/metro/09388__.js
import _mod9389 from "09389__.js";

require = arg1;
const dependencyMap = arg6;
QuoteType.QuoteType = undefined;
let obj = { Tab: 9 };
obj[9] = "Tab";
obj.NewLine = 10;
obj[10] = "NewLine";
obj.FormFeed = 12;
obj[12] = "FormFeed";
obj.CarriageReturn = 13;
obj[13] = "CarriageReturn";
obj.Space = 32;
obj[32] = "Space";
obj.ExclamationMark = 33;
obj[33] = "ExclamationMark";
obj.Number = 35;
obj[35] = "Number";
obj.Amp = 38;
obj[38] = "Amp";
obj.SingleQuote = 39;
obj[39] = "SingleQuote";
obj.DoubleQuote = 34;
obj[34] = "DoubleQuote";
obj.Dash = 45;
obj[45] = "Dash";
obj.Slash = 47;
obj[47] = "Slash";
obj.Zero = 48;
obj[48] = "Zero";
obj.Nine = 57;
obj[57] = "Nine";
obj.Semi = 59;
obj[59] = "Semi";
obj.Lt = 60;
obj[60] = "Lt";
obj.Eq = 61;
obj[61] = "Eq";
obj.Gt = 62;
obj[62] = "Gt";
obj.Questionmark = 63;
obj[63] = "Questionmark";
obj.UpperA = 65;
obj[65] = "UpperA";
obj.LowerA = 97;
obj[97] = "LowerA";
obj.UpperF = 70;
obj[70] = "UpperF";
obj.LowerF = 102;
obj[102] = "LowerF";
obj.UpperZ = 90;
obj[90] = "UpperZ";
obj.LowerZ = 122;
obj[122] = "LowerZ";
obj.LowerX = 120;
obj[120] = "LowerX";
obj.OpeningSquareBracket = 91;
obj[91] = "OpeningSquareBracket";
const obj2 = { Text: 1 };
obj2[1] = "Text";
obj2.BeforeTagName = 2;
obj2[2] = "BeforeTagName";
obj2.InTagName = 3;
obj2[3] = "InTagName";
obj2.InSelfClosingTag = 4;
obj2[4] = "InSelfClosingTag";
obj2.BeforeClosingTagName = 5;
obj2[5] = "BeforeClosingTagName";
obj2.InClosingTagName = 6;
obj2[6] = "InClosingTagName";
obj2.AfterClosingTagName = 7;
obj2[7] = "AfterClosingTagName";
obj2.BeforeAttributeName = 8;
obj2[8] = "BeforeAttributeName";
obj2.InAttributeName = 9;
obj2[9] = "InAttributeName";
obj2.AfterAttributeName = 10;
obj2[10] = "AfterAttributeName";
obj2.BeforeAttributeValue = 11;
obj2[11] = "BeforeAttributeValue";
obj2.InAttributeValueDq = 12;
obj2[12] = "InAttributeValueDq";
obj2.InAttributeValueSq = 13;
obj2[13] = "InAttributeValueSq";
obj2.InAttributeValueNq = 14;
obj2[14] = "InAttributeValueNq";
obj2.BeforeDeclaration = 15;
obj2[15] = "BeforeDeclaration";
obj2.InDeclaration = 16;
obj2[16] = "InDeclaration";
obj2.InProcessingInstruction = 17;
obj2[17] = "InProcessingInstruction";
obj2.BeforeComment = 18;
obj2[18] = "BeforeComment";
obj2.CDATASequence = 19;
obj2[19] = "CDATASequence";
obj2.InSpecialComment = 20;
obj2[20] = "InSpecialComment";
obj2.InCommentLike = 21;
obj2[21] = "InCommentLike";
obj2.BeforeSpecialS = 22;
obj2[22] = "BeforeSpecialS";
obj2.SpecialStartSequence = 23;
obj2[23] = "SpecialStartSequence";
obj2.InSpecialTag = 24;
obj2[24] = "InSpecialTag";
obj2.BeforeEntity = 25;
obj2[25] = "BeforeEntity";
obj2.BeforeNumericEntity = 26;
obj2[26] = "BeforeNumericEntity";
obj2.InNamedEntity = 27;
obj2[27] = "InNamedEntity";
obj2.InNumericEntity = 28;
obj2[28] = "InNumericEntity";
obj2.InHexEntity = 29;
obj2[29] = "InHexEntity";
QuoteType = QuoteType.QuoteType;
if (!QuoteType) {
  const obj3 = {};
  QuoteType.QuoteType = obj3;
  QuoteType = obj3;
}
QuoteType.NoValue = 0;
QuoteType[0] = "NoValue";
QuoteType.Unquoted = 1;
QuoteType[1] = "Unquoted";
QuoteType.Single = 2;
QuoteType[2] = "Single";
QuoteType.Double = 3;
QuoteType[3] = "Double";
const obj4 = { Cdata: null, CdataEnd: null, CommentEnd: null, ScriptEnd: null, StyleEnd: null, TitleEnd: null };
const uint8Array = new Uint8Array([67, 68, 65, 84, 65, 91]);
obj4.Cdata = uint8Array;
const uint8Array1 = new Uint8Array([93, 93, 62]);
obj4.CdataEnd = uint8Array1;
const uint8Array2 = new Uint8Array([45, 45, 62]);
obj4.CommentEnd = uint8Array2;
const uint8Array3 = new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]);
obj4.ScriptEnd = uint8Array3;
const uint8Array4 = new Uint8Array([60, 47, 115, 116, 121, 108, 101]);
obj4.StyleEnd = uint8Array4;
const uint8Array5 = new Uint8Array([60, 47, 116, 105, 116, 108, 101]);
obj4.TitleEnd = uint8Array5;
class Tokenizer {
  constructor(arg0, arg1) {
    obj = {
      cbs: arg1,
      state: closure_3.Text,
      buffer: "",
      sectionStart: 0,
      index: 0,
      baseState: closure_3.Text,
      isSpecial: false,
      running: true,
      offset: 0,
      currentSequence: undefined,
      sequenceIndex: 0,
      trieIndex: 0,
      trieCurrent: 0,
      entityResult: 0,
      entityExcess: 0,
      xmlMode: tmp,
      decodeEntities: tmp2,
    };
    xmlMode = arg0.xmlMode;
    tmp = undefined !== xmlMode && xmlMode;
    decodeEntities = arg0.decodeEntities;
    tmp2 = undefined === decodeEntities || decodeEntities;
    tmp3 = closure_0(closure_1[0]);
    obj.entityTrie = tmp ? tmp3.xmlDecodeTree : tmp3.htmlDecodeTree;
    return;
  }
  reset() {
    return;
  }
  write(arg0) {
    this.offset = this.offset + this.buffer.length;
    this.buffer = arg0;
    parsed = this.parse();
    return;
  }
  end() {
    self = this;
    if (this.running) {
      finishResult = self.finish();
    }
    return;
  }
  pause() {
    this.running = false;
    return;
  }
  resume() {
    self = this;
    this.running = true;
    if (this.index < this.buffer.length + this.offset) {
      parsed = self.parse();
    }
    return;
  }
  getIndex() {
    return this.index;
  }
  getSectionStart() {
    return this.sectionStart;
  }
  stateText(arg0) {
    self = this;
    tmp = closure_2;
    if (arg0 !== closure_2.Lt) {
      if (!self.decodeEntities) {
        return;
      }
      tmp2 = self.decodeEntities && arg0 === tmp.Amp;
      if (tmp2) {
        tmp3 = closure_3;
        self.state = closure_3.BeforeEntity;
      }
    }
    if (self.index > self.sectionStart) {
      cbs = self.cbs;
      ontextResult = cbs.ontext(self.sectionStart, self.index);
    }
    self.state = closure_3.BeforeTagName;
    self.sectionStart = self.index;
    return;
  }
  stateSpecialStartSequence(arg0) {
    self = this;
    tmp = this.sequenceIndex === this.currentSequence.length;
    if (tmp) {
      tmp3 = closure_2;
      tmp4 = arg0 === closure_2.Slash || arg0 === tmp3.Gt;
      if (!tmp4) {
        tmp5 =
          arg0 === tmp3.Space ||
          arg0 === tmp3.NewLine ||
          arg0 === tmp3.Tab ||
          arg0 === tmp3.FormFeed ||
          arg0 === tmp3.CarriageReturn;
        tmp4 = tmp5;
      }
      tmp2 = tmp4;
    } else {
      num = 32;
      tmp2 = (32 | arg0) === self.currentSequence[self.sequenceIndex];
    }
    if (tmp2) {
      if (!tmp) {
        self.sequenceIndex = +self.sequenceIndex + 1;
        return;
      }
    } else {
      flag = false;
      self.isSpecial = false;
    }
    self.sequenceIndex = 0;
    self.state = closure_3.InTagName;
    stateInTagNameResult = self.stateInTagName(arg0);
    return;
  }
  stateInSpecialTag(arg0) {
    self = this;
    if (this.sequenceIndex === this.currentSequence.length) {
      tmp = closure_2;
      if (arg0 !== closure_2.Gt) {
        tmp2 =
          arg0 === tmp.Space ||
          arg0 === tmp.NewLine ||
          arg0 === tmp.Tab ||
          arg0 === tmp.FormFeed ||
          arg0 === tmp.CarriageReturn;
        if (!tmp2) {
          num = 0;
          self.sequenceIndex = 0;
        }
      }
      diff = self.index - self.currentSequence.length;
      if (self.sectionStart < diff) {
        self.index = diff;
        ({ cbs, index } = self);
        ontextResult = cbs.ontext(self.sectionStart, diff);
        self.index = index;
      }
      flag = false;
      self.isSpecial = false;
      num4 = 2;
      self.sectionStart = diff + 2;
      result = self.stateInClosingTagName(arg0);
      return;
    }
    if ((32 | arg0) === self.currentSequence[self.sequenceIndex]) {
      num3 = 1;
      self.sequenceIndex = self.sequenceIndex + 1;
    } else {
      num5 = 0;
      if (0 === self.sequenceIndex) {
        tmp5 = closure_5;
        if (self.currentSequence === closure_5.TitleEnd) {
          decodeEntities = self.decodeEntities;
          if (decodeEntities) {
            tmp7 = closure_2;
            decodeEntities = arg0 === closure_2.Amp;
          }
          if (decodeEntities) {
            tmp8 = closure_3;
            self.state = closure_3.BeforeEntity;
          }
        } else {
          tmp6 = closure_2;
          if (self.fastForwardTo(closure_2.Lt)) {
            num2 = 1;
            self.sequenceIndex = 1;
          }
        }
      } else {
        tmp3 = globalThis;
        _Number = Number;
        tmp4 = closure_2;
        self.sequenceIndex = Number(arg0 === closure_2.Lt);
      }
    }
    return;
  }
  stateCDATASequence(arg0) {
    self = this;
    tmp = closure_5;
    if (arg0 === closure_5.Cdata[this.sequenceIndex]) {
      sum = self.sequenceIndex + 1;
      self.sequenceIndex = sum;
      if (sum === tmp.Cdata.length) {
        tmp5 = closure_3;
        self.state = closure_3.InCommentLike;
        self.currentSequence = tmp.CdataEnd;
        num2 = 0;
        self.sequenceIndex = 0;
        num3 = 1;
        self.sectionStart = self.index + 1;
      }
    } else {
      num = 0;
      self.sequenceIndex = 0;
      tmp2 = closure_3;
      self.state = closure_3.InDeclaration;
      stateInDeclarationResult = self.stateInDeclaration(arg0);
    }
    return;
  }
  fastForwardTo(arg0) {
    self = this;
    sum = this.index + 1;
    this.index = sum;
    if (sum < this.buffer.length + this.offset) {
      buffer = self.buffer;
      while (buffer.charCodeAt(self.index - self.offset) !== arg0) {
        sum1 = self.index + 1;
        self.index = sum1;
      }
      flag = true;
      return true;
    }
    self.index = self.buffer.length + self.offset - 1;
    return false;
  }
  stateInCommentLike(arg0) {
    self = this;
    if (arg0 === this.currentSequence[this.sequenceIndex]) {
      sum = self.sequenceIndex + 1;
      self.sequenceIndex = sum;
      if (sum === self.currentSequence.length) {
        tmp5 = closure_5;
        if (self.currentSequence === closure_5.CdataEnd) {
          cbs2 = self.cbs;
          num5 = 2;
          oncdataResult = cbs2.oncdata(self.sectionStart, self.index, 2);
        } else {
          cbs = self.cbs;
          num4 = 2;
          oncommentResult = cbs.oncomment(self.sectionStart, self.index, 2);
        }
        num6 = 0;
        self.sequenceIndex = 0;
        num7 = 1;
        self.sectionStart = self.index + 1;
        tmp4 = closure_3;
        self.state = closure_3.Text;
      }
    } else {
      num = 0;
      if (0 === self.sequenceIndex) {
        if (self.fastForwardTo(self.currentSequence[0])) {
          num3 = 1;
          self.sequenceIndex = 1;
        }
      } else {
        num2 = 1;
        if (arg0 !== self.currentSequence[self.sequenceIndex - 1]) {
          self.sequenceIndex = 0;
        }
      }
    }
    return;
  }
  isTagStartChar(arg0) {
    tmp = closure_2;
    if (this.xmlMode) {
      tmp4 = arg0 === tmp.Slash || arg0 === tmp.Gt;
      if (!tmp4) {
        tmp5 =
          arg0 === tmp.Space ||
          arg0 === tmp.NewLine ||
          arg0 === tmp.Tab ||
          arg0 === tmp.FormFeed ||
          arg0 === tmp.CarriageReturn;
        tmp4 = tmp5;
      }
      tmp2 = !tmp4;
    } else {
      tmp2 = arg0 >= tmp.LowerA && arg0 <= tmp.LowerZ;
      if (!tmp2) {
        tmp3 = arg0 >= tmp.UpperA && arg0 <= tmp.UpperZ;
        tmp2 = tmp3;
      }
    }
    return tmp2;
  }
  startSpecial(arg0, arg1) {
    return;
  }
  stateBeforeTagName(arg0) {
    self = this;
    tmp = closure_2;
    if (arg0 === closure_2.ExclamationMark) {
      tmp12 = closure_3;
      self.state = closure_3.BeforeDeclaration;
      num4 = 1;
      self.sectionStart = self.index + 1;
    } else if (arg0 === tmp.Questionmark) {
      tmp11 = closure_3;
      self.state = closure_3.InProcessingInstruction;
      num3 = 1;
      self.sectionStart = self.index + 1;
    } else if (self.isTagStartChar(arg0)) {
      num = 32;
      tmp5 = 32 | arg0;
      self.sectionStart = self.index;
      if (!self.xmlMode) {
        if (tmp5 === closure_5.TitleEnd[2]) {
          num2 = 3;
          startSpecialResult = self.startSpecial(tmp6.TitleEnd, 3);
        }
      }
      if (!self.xmlMode) {
        tmp8 = closure_5;
        if (tmp5 === closure_5.ScriptEnd[2]) {
          tmp9 = closure_3;
          InTagName = closure_3.BeforeSpecialS;
        }
        self.state = InTagName;
      }
      tmp10 = closure_3;
      InTagName = closure_3.InTagName;
    } else if (arg0 === tmp.Slash) {
      tmp4 = closure_3;
      self.state = closure_3.BeforeClosingTagName;
    } else {
      tmp2 = closure_3;
      self.state = closure_3.Text;
      stateTextResult = self.stateText(arg0);
    }
    return;
  }
  stateInTagName(arg0) {
    tmp = closure_2;
    tmp2 = arg0 === closure_2.Slash || arg0 === tmp.Gt;
    if (!tmp2) {
      tmp3 =
        arg0 === tmp.Space ||
        arg0 === tmp.NewLine ||
        arg0 === tmp.Tab ||
        arg0 === tmp.FormFeed ||
        arg0 === tmp.CarriageReturn;
      tmp2 = tmp3;
    }
    if (tmp2) {
      self = this;
      cbs = this.cbs;
      onopentagnameResult = cbs.onopentagname(this.sectionStart, this.index);
      num = -1;
      this.sectionStart = -1;
      tmp5 = closure_3;
      this.state = closure_3.BeforeAttributeName;
      result = this.stateBeforeAttributeName(arg0);
    }
    return;
  }
  stateBeforeClosingTagName(arg0) {
    tmp = closure_2;
    tmp2 =
      arg0 === closure_2.Space ||
      arg0 === tmp.NewLine ||
      arg0 === tmp.Tab ||
      arg0 === tmp.FormFeed ||
      arg0 === tmp.CarriageReturn;
    if (!tmp2) {
      self = this;
      if (arg0 === tmp.Gt) {
        tmp4 = closure_3;
        self.state = closure_3.Text;
      } else {
        tmp3 = closure_3;
        self.state = self.isTagStartChar(arg0) ? tmp3.InClosingTagName : tmp3.InSpecialComment;
        self.sectionStart = self.index;
      }
    }
    return;
  }
  stateInClosingTagName(arg0) {
    tmp = closure_2;
    tmp2 = arg0 === closure_2.Gt;
    if (!tmp2) {
      tmp3 =
        arg0 === tmp.Space ||
        arg0 === tmp.NewLine ||
        arg0 === tmp.Tab ||
        arg0 === tmp.FormFeed ||
        arg0 === tmp.CarriageReturn;
      tmp2 = tmp3;
    }
    if (tmp2) {
      self = this;
      cbs = this.cbs;
      onclosetagResult = cbs.onclosetag(this.sectionStart, this.index);
      num = -1;
      this.sectionStart = -1;
      tmp5 = closure_3;
      this.state = closure_3.AfterClosingTagName;
      result = this.stateAfterClosingTagName(arg0);
    }
    return;
  }
  stateAfterClosingTagName(arg0) {
    self = this;
    tmp2 = arg0 === closure_2.Gt || self.fastForwardTo(tmp.Gt);
    if (tmp2) {
      tmp3 = closure_3;
      ({ Text: self.state, Text: self.baseState } = closure_3);
      num = 1;
      self.sectionStart = self.index + 1;
    }
    return;
  }
  stateBeforeAttributeName(arg0) {
    self = this;
    tmp = closure_2;
    if (arg0 === closure_2.Gt) {
      cbs = self.cbs;
      onopentagendResult = cbs.onopentagend(self.index);
      sum = closure_3;
      if (self.isSpecial) {
        self.state = sum.InSpecialTag;
        num = 0;
        self.sequenceIndex = 0;
      } else {
        self.state = sum.Text;
      }
      self.baseState = self.state;
      num2 = 1;
      sum = self.index + 1;
      self.sectionStart = sum;
    } else {
      if (arg0 === tmp.Slash) {
        tmp4 = closure_3;
        self.state = closure_3.InSelfClosingTag;
      } else {
        tmp2 =
          arg0 === tmp.Space ||
          arg0 === tmp.NewLine ||
          arg0 === tmp.Tab ||
          arg0 === tmp.FormFeed ||
          arg0 === tmp.CarriageReturn;
        if (!tmp2) {
          tmp3 = closure_3;
          self.state = closure_3.InAttributeName;
          self.sectionStart = self.index;
        }
      }
      return;
    }
    return;
  }
  stateInSelfClosingTag(arg0) {
    self = this;
    tmp = closure_2;
    if (arg0 === closure_2.Gt) {
      cbs = self.cbs;
      onselfclosingtagResult = cbs.onselfclosingtag(self.index);
      tmp6 = closure_3;
      ({ Text: self.state, Text: self.baseState } = closure_3);
      num = 1;
      self.sectionStart = self.index + 1;
      flag = false;
      self.isSpecial = false;
    } else {
      tmp2 =
        arg0 === tmp.Space ||
        arg0 === tmp.NewLine ||
        arg0 === tmp.Tab ||
        arg0 === tmp.FormFeed ||
        arg0 === tmp.CarriageReturn;
      if (!tmp2) {
        tmp3 = closure_3;
        self.state = closure_3.BeforeAttributeName;
        result = self.stateBeforeAttributeName(arg0);
      }
    }
    return;
  }
  stateInAttributeName(arg0) {
    tmp = closure_2;
    tmp2 = arg0 === closure_2.Eq;
    if (!tmp2) {
      tmp3 = arg0 === tmp.Slash || arg0 === tmp.Gt;
      if (!tmp3) {
        tmp4 =
          arg0 === tmp.Space ||
          arg0 === tmp.NewLine ||
          arg0 === tmp.Tab ||
          arg0 === tmp.FormFeed ||
          arg0 === tmp.CarriageReturn;
        tmp3 = tmp4;
      }
      tmp2 = tmp3;
    }
    if (tmp2) {
      self = this;
      cbs = this.cbs;
      onattribnameResult = cbs.onattribname(this.sectionStart, this.index);
      num = -1;
      this.sectionStart = -1;
      tmp6 = closure_3;
      this.state = closure_3.AfterAttributeName;
      result = this.stateAfterAttributeName(arg0);
    }
    return;
  }
  stateAfterAttributeName(arg0) {
    self = this;
    tmp = closure_2;
    if (arg0 === closure_2.Eq) {
      tmp10 = closure_3;
      self.state = closure_3.BeforeAttributeValue;
    } else {
      if (arg0 !== tmp.Slash) {
        if (arg0 !== tmp.Gt) {
          tmp2 =
            arg0 === tmp.Space ||
            arg0 === tmp.NewLine ||
            arg0 === tmp.Tab ||
            arg0 === tmp.FormFeed ||
            arg0 === tmp.CarriageReturn;
          if (!tmp2) {
            cbs = self.cbs;
            tmp3 = closure_4;
            onattribendResult = cbs.onattribend(closure_4.NoValue, self.index);
            tmp5 = closure_3;
            self.state = closure_3.InAttributeName;
            self.sectionStart = self.index;
          }
        }
      }
      cbs2 = self.cbs;
      tmp6 = closure_4;
      onattribendResult1 = cbs2.onattribend(closure_4.NoValue, self.index);
      tmp8 = closure_3;
      self.state = closure_3.BeforeAttributeName;
      result = self.stateBeforeAttributeName(arg0);
    }
    return;
  }
  stateBeforeAttributeValue(arg0) {
    self = this;
    tmp = closure_2;
    if (arg0 === closure_2.DoubleQuote) {
      tmp6 = closure_3;
      self.state = closure_3.InAttributeValueDq;
      num2 = 1;
      self.sectionStart = self.index + 1;
    } else if (arg0 === tmp.SingleQuote) {
      tmp5 = closure_3;
      self.state = closure_3.InAttributeValueSq;
      num = 1;
      self.sectionStart = self.index + 1;
    } else {
      tmp2 =
        arg0 === tmp.Space ||
        arg0 === tmp.NewLine ||
        arg0 === tmp.Tab ||
        arg0 === tmp.FormFeed ||
        arg0 === tmp.CarriageReturn;
      if (!tmp2) {
        self.sectionStart = self.index;
        tmp3 = closure_3;
        self.state = closure_3.InAttributeValueNq;
        result = self.stateInAttributeValueNoQuotes(arg0);
      }
    }
    return;
  }
  handleInAttributeValue(arg0, arg1) {
    self = this;
    if (arg0 !== arg1) {
      if (!self.decodeEntities) {
      }
      decodeEntities = self.decodeEntities;
      if (decodeEntities) {
        tmp = closure_2;
        decodeEntities = arg0 === closure_2.Amp;
      }
      if (decodeEntities) {
        self.baseState = self.state;
        tmp2 = closure_3;
        self.state = closure_3.BeforeEntity;
      }
      return;
    }
    cbs = self.cbs;
    onattribdataResult = cbs.onattribdata(self.sectionStart, self.index);
    self.sectionStart = -1;
    cbs2 = self.cbs;
    if (arg1 === closure_2.DoubleQuote) {
      tmp5 = closure_4;
      Single = closure_4.Double;
    } else {
      tmp4 = closure_4;
      Single = closure_4.Single;
    }
    onattribendResult = cbs2.onattribend(Single, self.index);
    self.state = closure_3.BeforeAttributeName;
    return;
  }
  stateInAttributeValueDoubleQuotes(arg0) {
    result = this.handleInAttributeValue(arg0, closure_2.DoubleQuote);
    return;
  }
  stateInAttributeValueSingleQuotes(arg0) {
    result = this.handleInAttributeValue(arg0, closure_2.SingleQuote);
    return;
  }
  stateInAttributeValueNoQuotes(arg0) {
    tmp = closure_2;
    tmp2 =
      arg0 === closure_2.Space ||
      arg0 === tmp.NewLine ||
      arg0 === tmp.Tab ||
      arg0 === tmp.FormFeed ||
      arg0 === tmp.CarriageReturn;
    self = this;
    if (!tmp2) {
      if (arg0 !== tmp.Gt) {
        tmp3 = self.decodeEntities && arg0 === tmp.Amp;
        if (tmp3) {
          self.baseState = self.state;
          tmp4 = closure_3;
          self.state = closure_3.BeforeEntity;
        }
      }
      return;
    }
    cbs = self.cbs;
    onattribdataResult = cbs.onattribdata(self.sectionStart, self.index);
    self.sectionStart = -1;
    cbs2 = self.cbs;
    onattribendResult = cbs2.onattribend(closure_4.Unquoted, self.index);
    self.state = closure_3.BeforeAttributeName;
    result = self.stateBeforeAttributeName(arg0);
    return;
  }
  stateBeforeDeclaration(arg0) {
    self = this;
    if (arg0 === closure_2.OpeningSquareBracket) {
      tmp4 = closure_3;
      self.state = closure_3.CDATASequence;
      num = 0;
      self.sequenceIndex = 0;
    } else {
      if (arg0 === tmp.Dash) {
        tmp3 = closure_3;
        InDeclaration = closure_3.BeforeComment;
      } else {
        tmp2 = closure_3;
        InDeclaration = closure_3.InDeclaration;
      }
      self.state = InDeclaration;
    }
    return;
  }
  stateInDeclaration(arg0) {
    self = this;
    tmp2 = arg0 === closure_2.Gt || self.fastForwardTo(tmp.Gt);
    if (tmp2) {
      cbs = self.cbs;
      ondeclarationResult = cbs.ondeclaration(self.sectionStart, self.index);
      tmp4 = closure_3;
      self.state = closure_3.Text;
      num = 1;
      self.sectionStart = self.index + 1;
    }
    return;
  }
  stateInProcessingInstruction(arg0) {
    self = this;
    tmp2 = arg0 === closure_2.Gt || self.fastForwardTo(tmp.Gt);
    if (tmp2) {
      cbs = self.cbs;
      result = cbs.onprocessinginstruction(self.sectionStart, self.index);
      tmp4 = closure_3;
      self.state = closure_3.Text;
      num = 1;
      self.sectionStart = self.index + 1;
    }
    return;
  }
  stateBeforeComment(arg0) {
    self = this;
    if (arg0 === closure_2.Dash) {
      tmp2 = closure_3;
      self.state = closure_3.InCommentLike;
      tmp3 = closure_5;
      self.currentSequence = closure_5.CommentEnd;
      num = 2;
      self.sequenceIndex = 2;
      num2 = 1;
      self.sectionStart = self.index + 1;
    } else {
      tmp = closure_3;
      self.state = closure_3.InDeclaration;
    }
    return;
  }
  stateInSpecialComment(arg0) {
    self = this;
    tmp2 = arg0 === closure_2.Gt || self.fastForwardTo(tmp.Gt);
    if (tmp2) {
      cbs = self.cbs;
      num = 0;
      oncommentResult = cbs.oncomment(self.sectionStart, self.index, 0);
      tmp4 = closure_3;
      self.state = closure_3.Text;
      num2 = 1;
      self.sectionStart = self.index + 1;
    }
    return;
  }
  stateBeforeSpecialS(arg0) {
    self = this;
    tmp = 32 | arg0;
    tmp2 = closure_5;
    if (tmp === closure_5.ScriptEnd[3]) {
      num2 = 4;
      startSpecialResult = self.startSpecial(tmp2.ScriptEnd, 4);
    } else if (tmp === tmp2.StyleEnd[3]) {
      num = 4;
      startSpecialResult1 = self.startSpecial(tmp2.StyleEnd, 4);
    } else {
      tmp3 = closure_3;
      self.state = closure_3.InTagName;
      stateInTagNameResult = self.stateInTagName(arg0);
    }
    return;
  }
  stateBeforeEntity(arg0) {
    obj = { entityExcess: 1, entityResult: 0 };
    if (arg0 === closure_2.Number) {
      tmp4 = closure_3;
      obj.state = closure_3.BeforeNumericEntity;
    } else if (arg0 !== tmp.Amp) {
      obj.trieIndex = 0;
      obj.trieCurrent = obj.entityTrie[0];
      tmp2 = closure_3;
      obj.state = closure_3.InNamedEntity;
      stateInNamedEntityResult = obj.stateInNamedEntity(arg0);
    }
    return;
  }
  stateInNamedEntity(arg0) {
    self = this;
    this.entityExcess = this.entityExcess + 1;
    tmp = closure_0;
    tmp2 = closure_1;
    this.trieIndex = closure_0(closure_1[0]).determineBranch(
      this.entityTrie,
      this.trieCurrent,
      this.trieIndex + 1,
      arg0,
    );
    if (this.trieIndex < 0) {
      emitNamedEntityResult = self.emitNamedEntity();
      self.index = +self.index - 1;
      return;
    } else {
      self.trieCurrent = self.entityTrie[self.trieIndex];
      tmp9 = self.trieCurrent & tmp(tmp2[0]).BinTrieFlags.VALUE_LENGTH;
      if (tmp9) {
        num = 14;
        diff = (tmp9 >> 14) - 1;
        if (!self.allowLegacyEntity()) {
          tmp4 = closure_2;
          if (arg0 !== closure_2.Semi) {
            self.trieIndex = self.trieIndex + diff;
          }
        }
        sum = self.index - self.entityExcess + 1;
        if (sum > self.sectionStart) {
          emitPartialResult = self.emitPartial(self.sectionStart, sum);
        }
        self.entityResult = self.trieIndex;
        self.trieIndex = self.trieIndex + diff;
        self.entityExcess = 0;
        self.sectionStart = self.index + 1;
        if (0 === diff) {
          emitNamedEntityResult1 = self.emitNamedEntity();
        }
      }
      return;
    }
  }
  emitNamedEntity() {
    self = this;
    this.state = this.baseState;
    if (0 !== this.entityResult) {
      tmp3 = closure_0;
      tmp4 = closure_1;
      num3 = 14;
      tmp5 = (self.entityTrie[self.entityResult] & closure_0(closure_1[0]).BinTrieFlags.VALUE_LENGTH) >> 14;
      num4 = 1;
      if (1 === tmp5) {
        emitCodePointResult = self.emitCodePoint(
          self.entityTrie[self.entityResult] & ~tmp3(tmp4[0]).BinTrieFlags.VALUE_LENGTH,
        );
      } else {
        num = 2;
        if (2 === tmp5) {
          emitCodePointResult1 = self.emitCodePoint(self.entityTrie[self.entityResult + 1]);
        } else {
          num2 = 3;
          if (3 === tmp5) {
            emitCodePointResult2 = self.emitCodePoint(self.entityTrie[self.entityResult + 1]);
            emitCodePointResult3 = self.emitCodePoint(self.entityTrie[self.entityResult + 2]);
          }
        }
      }
    }
    return;
  }
  stateBeforeNumericEntity(arg0) {
    self = this;
    if ((32 | arg0) === closure_2.LowerX) {
      self.entityExcess = self.entityExcess + 1;
      tmp3 = closure_3;
      self.state = closure_3.InHexEntity;
    } else {
      tmp = closure_3;
      self.state = closure_3.InNumericEntity;
      stateInNumericEntityResult = self.stateInNumericEntity(arg0);
    }
    return;
  }
  emitNumericEntity(arg0) {
    self = this;
    diff = this.index - this.entityExcess - 1;
    if (diff + 2 + Number(this.state === closure_3.InHexEntity) !== this.index) {
      if (diff > self.sectionStart) {
        emitPartialResult = self.emitPartial(self.sectionStart, diff);
      }
      tmp3 = arg0;
      _Number = Number;
      self.sectionStart = self.index + Number(arg0);
      tmp4 = closure_0;
      tmp5 = closure_1;
      emitCodePointResult = self.emitCodePoint(closure_0(closure_1[0]).replaceCodePoint(self.entityResult));
    }
    self.state = self.baseState;
    return;
  }
  stateInNumericEntity(arg0) {
    self = this;
    tmp = closure_2;
    if (arg0 === closure_2.Semi) {
      flag2 = true;
      emitNumericEntityResult = self.emitNumericEntity(true);
    } else {
      tmp2 = arg0 >= tmp.Zero && arg0 <= tmp.Nine;
      if (tmp2) {
        num = 10;
        self.entityResult = 10 * self.entityResult + (arg0 - tmp.Zero);
        self.entityExcess = self.entityExcess + 1;
      } else {
        if (self.allowLegacyEntity()) {
          flag = false;
          emitNumericEntityResult1 = self.emitNumericEntity(false);
        } else {
          self.state = self.baseState;
        }
        self.index = self.index - 1;
      }
    }
    return;
  }
  stateInHexEntity(arg0) {
    self = this;
    tmp = closure_2;
    if (arg0 === closure_2.Semi) {
      flag2 = true;
      emitNumericEntityResult = self.emitNumericEntity(true);
    } else {
      tmp2 = arg0 >= tmp.Zero && arg0 <= tmp.Nine;
      if (tmp2) {
        num4 = 16;
        self.entityResult = 16 * self.entityResult + (arg0 - tmp.Zero);
        self.entityExcess = self.entityExcess + 1;
      } else {
        tmp3 = arg0 >= tmp.UpperA && arg0 <= tmp.UpperF;
        if (!tmp3) {
          tmp4 = arg0 >= tmp.LowerA && arg0 <= tmp.LowerF;
          tmp3 = tmp4;
        }
        if (tmp3) {
          num = 16;
          num2 = 32;
          num3 = 10;
          self.entityResult = 16 * self.entityResult + ((32 | arg0) - tmp.LowerA + 10);
          self.entityExcess = self.entityExcess + 1;
        } else {
          if (self.allowLegacyEntity()) {
            flag = false;
            emitNumericEntityResult1 = self.emitNumericEntity(false);
          } else {
            self.state = self.baseState;
          }
          self.index = self.index - 1;
        }
      }
    }
    return;
  }
  allowLegacyEntity() {
    self = this;
    xmlMode = this.xmlMode;
    tmp = !xmlMode;
    if (!xmlMode) {
      tmp3 = self.baseState === closure_3.Text || self.baseState === tmp2.InSpecialTag;
      tmp = tmp3;
    }
    return tmp;
  }
  cleanup() {
    self = this;
    tmp = this.running && self.sectionStart !== self.index;
    if (tmp) {
      tmp2 = closure_3;
      if (self.state !== closure_3.Text) {
        if (self.state === tmp2.InSpecialTag) {
          num = 0;
        }
        tmp3 =
          self.state !== tmp2.InAttributeValueDq &&
          self.state !== tmp2.InAttributeValueSq &&
          self.state !== tmp2.InAttributeValueNq;
        if (!tmp3) {
          cbs = self.cbs;
          onattribdataResult = cbs.onattribdata(self.sectionStart, self.index);
          self.sectionStart = self.index;
        }
      }
      cbs2 = self.cbs;
      ontextResult = cbs2.ontext(self.sectionStart, self.index);
      self.sectionStart = self.index;
    }
    return;
  }
  shouldContinue() {
    tmp = this.index < this.buffer.length + this.offset && this.running;
    return tmp;
  }
  parse() {
    self = this;
    if (this.shouldContinue()) {
      do {
        buffer = self.buffer;
        charCodeAtResult = buffer.charCodeAt(self.index - self.offset);
        state = self.state;
        tmp2 = closure_3;
        if (closure_3.Text === state) {
          stateTextResult = self.stateText(charCodeAtResult);
        } else if (tmp2.SpecialStartSequence === state) {
          result = self.stateSpecialStartSequence(charCodeAtResult);
        } else if (tmp2.InSpecialTag === state) {
          stateInSpecialTagResult = self.stateInSpecialTag(charCodeAtResult);
        } else if (tmp2.CDATASequence === state) {
          stateCDATASequenceResult = self.stateCDATASequence(charCodeAtResult);
        } else if (tmp2.InAttributeValueDq === state) {
          result1 = self.stateInAttributeValueDoubleQuotes(charCodeAtResult);
        } else if (tmp2.InAttributeName === state) {
          stateInAttributeNameResult = self.stateInAttributeName(charCodeAtResult);
        } else if (tmp2.InCommentLike === state) {
          stateInCommentLikeResult = self.stateInCommentLike(charCodeAtResult);
        } else if (tmp2.InSpecialComment === state) {
          result2 = self.stateInSpecialComment(charCodeAtResult);
        } else if (tmp2.BeforeAttributeName === state) {
          result3 = self.stateBeforeAttributeName(charCodeAtResult);
        } else if (tmp2.InTagName === state) {
          stateInTagNameResult = self.stateInTagName(charCodeAtResult);
        } else if (tmp2.InClosingTagName === state) {
          result4 = self.stateInClosingTagName(charCodeAtResult);
        } else if (tmp2.BeforeTagName === state) {
          stateBeforeTagNameResult = self.stateBeforeTagName(charCodeAtResult);
        } else if (tmp2.AfterAttributeName === state) {
          result5 = self.stateAfterAttributeName(charCodeAtResult);
        } else if (tmp2.InAttributeValueSq === state) {
          result6 = self.stateInAttributeValueSingleQuotes(charCodeAtResult);
        } else if (tmp2.BeforeAttributeValue === state) {
          result7 = self.stateBeforeAttributeValue(charCodeAtResult);
        } else if (tmp2.BeforeClosingTagName === state) {
          result8 = self.stateBeforeClosingTagName(charCodeAtResult);
        } else if (tmp2.AfterClosingTagName === state) {
          result9 = self.stateAfterClosingTagName(charCodeAtResult);
        } else if (tmp2.BeforeSpecialS === state) {
          stateBeforeSpecialSResult = self.stateBeforeSpecialS(charCodeAtResult);
        } else if (tmp2.InAttributeValueNq === state) {
          result10 = self.stateInAttributeValueNoQuotes(charCodeAtResult);
        } else if (tmp2.InSelfClosingTag === state) {
          result11 = self.stateInSelfClosingTag(charCodeAtResult);
        } else if (tmp2.InDeclaration === state) {
          stateInDeclarationResult = self.stateInDeclaration(charCodeAtResult);
        } else if (tmp2.BeforeDeclaration === state) {
          result12 = self.stateBeforeDeclaration(charCodeAtResult);
        } else if (tmp2.BeforeComment === state) {
          stateBeforeCommentResult = self.stateBeforeComment(charCodeAtResult);
        } else if (tmp2.InProcessingInstruction === state) {
          result13 = self.stateInProcessingInstruction(charCodeAtResult);
        } else if (tmp2.InNamedEntity === state) {
          stateInNamedEntityResult = self.stateInNamedEntity(charCodeAtResult);
        } else if (tmp2.BeforeEntity === state) {
          stateBeforeEntityResult = self.stateBeforeEntity(charCodeAtResult);
        } else if (tmp2.InHexEntity === state) {
          stateInHexEntityResult = self.stateInHexEntity(charCodeAtResult);
        } else if (tmp2.InNumericEntity === state) {
          stateInNumericEntityResult = self.stateInNumericEntity(charCodeAtResult);
        } else {
          result14 = self.stateBeforeNumericEntity(charCodeAtResult);
        }
        self.index = self.index + 1;
      } while (self.shouldContinue());
    }
    cleanupResult = self.cleanup();
    return;
  }
  finish() {
    self = this;
    if (this.state === closure_3.InNamedEntity) {
      emitNamedEntityResult = self.emitNamedEntity();
    }
    if (self.sectionStart < self.index) {
      handleTrailingDataResult = self.handleTrailingData();
    }
    cbs = self.cbs;
    onendResult = cbs.onend();
    return;
  }
  handleTrailingData() {
    self = this;
    sum = this.buffer.length + this.offset;
    tmp2 = closure_3;
    if (this.state === closure_3.InCommentLike) {
      tmp6 = closure_5;
      if (self.currentSequence === closure_5.CdataEnd) {
        cbs3 = self.cbs;
        num2 = 0;
        oncdataResult = cbs3.oncdata(self.sectionStart, sum, 0);
      } else {
        cbs2 = self.cbs;
        num = 0;
        oncommentResult = cbs2.oncomment(self.sectionStart, sum, 0);
      }
    } else {
      if (self.state !== tmp2.InNumericEntity) {
        if (self.state === tmp2.InHexEntity) {
        }
        tmp3 =
          self.state === tmp2.InTagName ||
          self.state === tmp2.BeforeAttributeName ||
          self.state === tmp2.BeforeAttributeValue ||
          self.state === tmp2.AfterAttributeName ||
          self.state === tmp2.InAttributeName ||
          self.state === tmp2.InAttributeValueSq ||
          self.state === tmp2.InAttributeValueDq ||
          self.state === tmp2.InAttributeValueNq ||
          self.state === tmp2.InClosingTagName;
        if (!tmp3) {
          cbs = self.cbs;
          ontextResult = cbs.ontext(self.sectionStart, sum);
        }
      }
      flag = false;
      emitNumericEntityResult = self.emitNumericEntity(false);
    }
    return;
  }
  emitPartial(arg0, arg1) {
    self = this;
    if (this.baseState !== closure_3.Text) {
      if (self.baseState !== tmp.InSpecialTag) {
        cbs2 = self.cbs;
        onattribdataResult = cbs2.onattribdata(arg0, arg1);
      }
      return;
    }
    cbs = self.cbs;
    ontextResult = cbs.ontext(arg0, arg1);
    return;
  }
  emitCodePoint(arg0) {
    self = this;
    if (this.baseState !== closure_3.Text) {
      if (self.baseState !== tmp.InSpecialTag) {
        cbs2 = self.cbs;
        onattribentityResult = cbs2.onattribentity(arg0);
      }
      return;
    }
    cbs = self.cbs;
    ontextentityResult = cbs.ontextentity(arg0);
    return;
  }
}
QuoteType.default = Tokenizer;
