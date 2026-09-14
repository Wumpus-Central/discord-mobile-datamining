// === Module 17353: StringFormat ===

// Module 17353 (StringFormat)
class Compiler {
  constructor(arg0, arg1, arg2) {
    return;
  }
  compile(arg0) {
    obj = { pluralStack: [], currentPlural: null, pluralNumberFormat: null };
    return obj.compileMessage(arg0);
  }
  compileMessage(arg0) {
    self = this;
    if (arg0) {
      str = "messageFormatPattern";
      if ("messageFormatPattern" === arg0.type) {
        elements = arg0.elements;
        items = [];
        length = elements.length;
        num = 0;
        num2 = 1;
        str3 = "argumentElement";
        str4 = "messageTextElement";
        if (0 < length) {
          while (true) {
            tmp = elements[num];
            type = tmp.type;
            tmp2 = num;
            if ("messageTextElement" === type) {
              arr1 = items.push(self.compileMessageText(tmp));
            } else if ("argumentElement" !== type) {
              break;
            } else {
              arr3 = items.push(self.compileArgument(tmp));
            }
            num = num + 1;
          }
          tmp3 = globalThis;
          _Error = Error;
          tmp4 = new.target;
          str2 = "Message element does not have a valid type";
          tmp5 = new.target;
          error = new Error("Message element does not have a valid type");
          tmp7 = error;
          throw error;
        }
        return items;
      }
    }
    error1 = new Error("Message AST is not of type: \"messageFormatPattern\"");
    throw error1;
  }
  compileMessageText(arg0) {
    self = this;
    if (this.currentPlural) {
      obj = /(^|[^\\])#/g;
      if (obj.test(arg0.value)) {
        if (!self.pluralNumberFormat) {
          tmp2 = globalThis;
          _Intl = Intl;
          tmp3 = new.target;
          tmp4 = new.target;
          numberFormat = new Intl.NumberFormat(self.locales);
          tmp6 = numberFormat;
          self.pluralNumberFormat = numberFormat;
        }
        tmp7 = PluralOffsetString;
        obj1 = Object.create(PluralOffsetString.prototype);
        obj3 = {};
        obj3.id = self.currentPlural.id;
        obj3.offset = self.currentPlural.format.offset;
        obj3.numberFormat = self.pluralNumberFormat;
        obj3.string = arg0.value;
        replaced = obj3;
      }
      return replaced;
    }
    str = arg0.value;
    replaced = str.replace(/\\#/g, "#");
    return;
  }
  compileArgument(arg0) {
    format = arg0.format;
    if (format) {
      self = this;
      ({ formats, locales } = this);
      type = format.type;
      str = "numberFormat";
      if ("numberFormat" === type) {
        obj1 = { id: null, format: null };
        obj1.id = arg0.id;
        tmp27 = globalThis;
        _Intl3 = Intl;
        tmp28 = new.target;
        tmp29 = new.target;
        tmp30 = locales;
        numberFormat = new Intl.NumberFormat(locales, formats.number[format.style]);
        tmp32 = numberFormat;
        obj1.format = numberFormat.format;
        return obj1;
      } else {
        str4 = "dateFormat";
        if ("dateFormat" === type) {
          obj6 = { id: null, format: null };
          obj6.id = arg0.id;
          tmp21 = globalThis;
          _Intl2 = Intl;
          tmp22 = new.target;
          tmp23 = new.target;
          tmp24 = locales;
          dateTimeFormat = new Intl.DateTimeFormat(locales, formats.date[format.style]);
          tmp26 = dateTimeFormat;
          obj6.format = dateTimeFormat.format;
          return obj6;
        } else {
          str5 = "timeFormat";
          if ("timeFormat" === type) {
            obj7 = { id: null, format: null };
            obj7.id = arg0.id;
            tmp15 = globalThis;
            _Intl = Intl;
            tmp16 = new.target;
            tmp17 = new.target;
            tmp18 = locales;
            dateTimeFormat1 = new Intl.DateTimeFormat(locales, formats.time[format.style]);
            tmp20 = dateTimeFormat1;
            obj7.format = dateTimeFormat1.format;
            return obj7;
          } else {
            str6 = "pluralFormat";
            if ("pluralFormat" === type) {
              tmp13 = PluralFormat;
              compileOptionsResult = self.compileOptions(arg0);
              ({ ordinal, offset } = format);
              obj8 = Object.create(PluralFormat.prototype);
              obj9 = {};
              obj9.id = arg0.id;
              obj9.useOrdinal = ordinal;
              obj9.offset = offset;
              obj9.options = compileOptionsResult;
              obj9.pluralFn = tmp3;
              return obj9;
            } else {
              str2 = "selectFormat";
              if ("selectFormat" === type) {
                tmp10 = SelectFormat;
                compileOptionsResult1 = self.compileOptions(arg0);
                obj10 = Object.create(SelectFormat.prototype);
                obj = {};
                obj.id = arg0.id;
                obj.options = compileOptionsResult1;
                return obj;
              } else {
                tmp4 = globalThis;
                _Error = Error;
                tmp5 = new.target;
                str3 = "Message element does not have a valid format type";
                tmp6 = new.target;
                error = new Error("Message element does not have a valid format type");
                tmp8 = error;
                throw error;
              }
            }
          }
        }
      }
    } else {
      tmp = StringFormat;
      obj11 = Object.create(StringFormat.prototype);
      obj11.id = arg0.id;
      return obj11;
    }
  }
  compileOptions(arg0) {
    self = this;
    format = arg0.format;
    options = format.options;
    pluralStack = this.pluralStack;
    arr1 = pluralStack.push(this.currentPlural);
    tmp2 = null;
    if ("pluralFormat" === format.type) {
      tmp2 = arg0;
    }
    obj = {};
    self.currentPlural = tmp2;
    length = options.length;
    for (let num = 0; num < length; num = num + 1) {
      iter = options[num];
      obj[iter.selector] = self.compileMessage(iter.value);
    }
    pluralStack1 = self.pluralStack;
    self.currentPlural = pluralStack1.pop();
    return obj;
  }
}
class StringFormat {
  constructor(arg0) {
    this.id = arg0;
    return;
  }
  format(arg0) {
    str = "";
    if (arg0) {
      StringResult = arg0;
      if (typeof arg0 !== "string") {
        tmp2 = globalThis;
        _String = String;
        StringResult = String(arg0);
      }
      str = StringResult;
    }
    return str;
  }
}
class PluralFormat {
  constructor(arg0, arg1, arg2, arg3, arg4) {
    return;
  }
  getOption(arg0) {
    self = this;
    options = this.options;
    tmp = options["=" + arg0] || options[self.pluralFn(self, arg0 - self.offset, self.useOrdinal)] || options.other;
    return tmp;
  }
}
class PluralOffsetString {
  constructor(arg0, arg1, arg2, arg3) {
    return;
  }
  format(arg0) {
    numberFormat = this.numberFormat;
    str = this.string;
    str2 = str.replace(/(^|[^\\])#/g, `$1${numberFormat.format(arg0 - this.offset)}`);
    return str2.replace(/\\#/g, "#");
  }
}
class SelectFormat {
  constructor(arg0, arg1) {
    return;
  }
  getOption(arg0) {
    options = this.options;
    tmp = options[arg0] || options.other;
    return tmp;
  }
}

export default Compiler;