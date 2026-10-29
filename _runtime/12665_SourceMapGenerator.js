// _runtime/12665_SourceMapGenerator.js
import _mod12666 from "metro/12666__.js";
import ArraySet from "12667_ArraySet.js";
import MappingList from "12668_MappingList.js";
import base64VLQ_encode from "12669_base64VLQ_encode.js";

require = arg1;
let dependencyMap = arg6;
class SourceMapGenerator {
  constructor(arg0) {
    obj = {};
    obj1 = arg0;
    if (!arg0) {
      obj1 = {};
    }
    obj3 = closure_0(closure_1[0]);
    obj._file = obj3.getArg(obj1, "file", null);
    obj4 = closure_0(closure_1[0]);
    obj._sourceRoot = obj4.getArg(obj1, "sourceRoot", null);
    obj5 = closure_0(closure_1[0]);
    obj._skipValidation = obj5.getArg(obj1, "skipValidation", false);
    arraySet = new closure_0(closure_1[1]).ArraySet();
    obj._sources = arraySet;
    arraySet1 = new closure_0(closure_1[1]).ArraySet();
    obj._names = arraySet1;
    mappingList = new closure_0(closure_1[2]).MappingList();
    obj._mappings = mappingList;
    obj._sourcesContents = null;
    return;
  }
  static fromSourceMap(arg0) {
    closure_0 = arg0;
    sourceRoot = arg0.sourceRoot;
    obj = { file: arg0.file, sourceRoot };
    obj1 = Object.create(closure_2.prototype);
    obj6 = {};
    obj3 = closure_0(sourceRoot[0]);
    obj6._file = obj3.getArg(obj, "file", null);
    obj4 = closure_0(sourceRoot[0]);
    obj6._sourceRoot = obj4.getArg(obj, "sourceRoot", null);
    obj5 = closure_0(sourceRoot[0]);
    obj6._skipValidation = obj5.getArg(obj, "skipValidation", false);
    arraySet = new closure_0(sourceRoot[1]).ArraySet();
    obj6._sources = arraySet;
    arraySet1 = new closure_0(sourceRoot[1]).ArraySet();
    obj6._names = arraySet1;
    mappingList = new closure_0(sourceRoot[2]).MappingList();
    obj6._mappings = mappingList;
    obj6._sourcesContents = null;
    closure_2 = obj6;
    eachMappingResult = arg0.eachMapping((line) => {
      const obj = { generated: { line: line.generatedLine, column: line.generatedColumn } };
      if (null != line.source) {
        obj.source = line.source;
        if (null != sourceRoot) {
          obj.source = _mod12666.relative(tmp, obj.source);
        }
        ({ originalLine: obj3.line, originalColumn: obj3.column } = line);
        obj.original = { line: null, column: null };
        if (null != line.name) {
          obj.name = line.name;
        }
        const obj4 = { line: null, column: null };
      }
      obj7.addMapping(obj);
    });
    sources = arg0.sources;
    item = sources.forEach((item) => {
      let relativeResult = item;
      if (null !== sourceRoot) {
        relativeResult = _mod12666.relative(tmp, item);
      }
      const _sources = obj7._sources;
      if (!_sources.has(relativeResult)) {
        const _sources2 = obj7._sources;
        _sources2.add(relativeResult);
      }
      const sourceContentForResult = closure_0.sourceContentFor(item);
      if (null != sourceContentForResult) {
        obj7.setSourceContent(item, sourceContentForResult);
      }
    });
    return obj6;
  }
  addMapping(arg0) {
    self = this;
    obj = closure_0(closure_1[0]);
    arg = obj.getArg(arg0, "generated");
    obj2 = closure_0(closure_1[0]);
    arg1 = obj2.getArg(arg0, "original", null);
    obj3 = closure_0(closure_1[0]);
    arg2 = obj3.getArg(arg0, "source", null);
    obj4 = closure_0(closure_1[0]);
    arg3 = obj4.getArg(arg0, "name", null);
    if (!this._skipValidation) {
      tmp5 = self;
      tmp6 = arg;
      tmp7 = arg1;
      tmp8 = arg2;
      tmp9 = arg3;
      _validateMappingResult = self._validateMapping(arg, arg1, arg2, arg3);
    }
    tmp11 = arg2;
    if (null != arg2) {
      tmp12 = globalThis;
      _String = String;
      StringResult = String(arg2);
      _sources = self._sources;
      tmp11 = StringResult;
      if (!_sources.has(StringResult)) {
        _sources2 = self._sources;
        addResult = _sources2.add(StringResult);
        tmp11 = StringResult;
      }
    }
    tmp15 = arg3;
    if (null != arg3) {
      tmp16 = globalThis;
      _String2 = String;
      StringResult1 = String(arg3);
      _names = self._names;
      tmp15 = StringResult1;
      if (!_names.has(StringResult1)) {
        _names2 = self._names;
        addResult1 = _names2.add(StringResult1);
        tmp15 = StringResult1;
      }
    }
    _mappings = self._mappings;
    obj1 = {
      generatedLine: arg.line,
      generatedColumn: arg.column,
      originalLine: null,
      originalColumn: null,
      source: null,
      name: null,
    };
    line = null != arg1;
    if (line) {
      line = arg1.line;
    }
    obj1.originalLine = line;
    obj1.originalColumn = null != arg1 && arg1.column;
    obj1.source = tmp11;
    obj1.name = tmp15;
    addResult2 = _mappings.add(obj1);
    return;
  }
  setSourceContent(arg0, arg1) {
    self = this;
    relativeResult = arg0;
    if (null != this._sourceRoot) {
      tmp4 = closure_0;
      tmp5 = closure_1;
      obj = closure_0(closure_1[0]);
      relativeResult = obj.relative(self._sourceRoot, arg0);
    }
    if (null != arg1) {
      if (!self._sourcesContents) {
        tmp10 = globalThis;
        _Object2 = Object;
        self._sourcesContents = Object.create(null);
      }
      tmp11 = closure_0;
      tmp12 = closure_1;
      obj3 = closure_0(closure_1[0]);
      self._sourcesContents[obj3.toSetString(relativeResult)] = arg1;
    } else if (self._sourcesContents) {
      _sourcesContents = self._sourcesContents;
      tmp6 = closure_0;
      tmp7 = closure_1;
      obj2 = closure_0(closure_1[0]);
      toSetStringResult = obj2.toSetString(relativeResult);
      delete tmp2[tmp];
      tmp9 = globalThis;
      _Object = Object;
      num = 0;
      if (0 === Object.keys(self._sourcesContents).length) {
        self._sourcesContents = null;
      }
    }
    return;
  }
  applySourceMap(arg0, arg1, arg2) {
    closure_0 = arg0;
    tmp = arg1;
    closure_1 = arg2;
    closure_2 = arg1;
    if (null == arg1) {
      if (null == arg0.file) {
        tmp8 = globalThis;
        _Error = Error;
        tmp9 = new.target;
        str =
          'SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.';
        tmp10 = new.target;
        error = new Error(
          'SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.',
        );
        tmp12 = error;
        throw error;
      } else {
        file = arg0.file;
        closure_2 = file;
        tmp = file;
      }
    }
    self = this;
    _sourceRoot = this._sourceRoot;
    if (null != _sourceRoot) {
      tmp2 = closure_0;
      tmp3 = closure_1;
      obj = closure_0(closure_1[0]);
      closure_2 = obj.relative(_sourceRoot, tmp);
    }
    arraySet = new closure_0(closure_1[1]).ArraySet();
    closure_4 = arraySet;
    arraySet1 = new closure_0(closure_1[1]).ArraySet();
    closure_5 = arraySet1;
    _mappings = self._mappings;
    unsortedForEachResult = _mappings.unsortedForEach((source) => {
      if (source.source === closure_2) {
        if (null != source.originalLine) {
          ({ originalLine: obj3.line, originalColumn: obj3.column } = source);
          const originalPositionForResult = closure_0.originalPositionFor({ line: null, column: null });
          if (null != originalPositionForResult.source) {
            source.source = originalPositionForResult.source;
            if (null != closure_1) {
              source.source = _mod12666.join(tmp17, source.source);
            }
            if (null != _sourceRoot) {
              source.source = _mod12666.relative(tmp3, source.source);
            }
            ({ line: source.originalLine, column: source.originalColumn } = originalPositionForResult);
            if (null != originalPositionForResult.name) {
              source.name = originalPositionForResult.name;
            }
          }
          const obj4 = { line: null, column: null };
        }
      }
      source = source.source;
      let hasItem = null == source;
      if (!hasItem) {
        hasItem = arraySet.has(source);
      }
      if (!hasItem) {
        arraySet.add(source);
      }
      const name = source.name;
      let hasItem1 = null == name;
      if (!hasItem1) {
        hasItem1 = arraySet2.has(name);
      }
      if (!hasItem1) {
        arraySet2.add(name);
      }
    }, self);
    self._sources = arraySet;
    self._names = arraySet1;
    sources = arg0.sources;
    item = sources.forEach(function (item) {
      const sourceContentForResult = closure_0.sourceContentFor(item);
      if (null != sourceContentForResult) {
        let joined = item;
        if (null != closure_1) {
          joined = _mod12666.join(tmp2, item);
        }
        let relativeResult = joined;
        if (null != _sourceRoot) {
          relativeResult = _mod12666.relative(tmp6, joined);
        }
        const self = this;
        this.setSourceContent(relativeResult, sourceContentForResult);
      }
    }, self);
    return;
  }
  _validateMapping(arg0, arg1, arg2, arg3) {
    if (arg1) {
      if (typeof arg1.line !== "number") {
        if (typeof arg1.column !== "number") {
          tmp2 = globalThis;
          _Error = Error;
          tmp3 = new.target;
          str5 =
            "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.";
          tmp4 = new.target;
          error = new Error(
            "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.",
          );
          tmp6 = error;
          throw error;
        }
      }
    }
    if (arg0) {
      str = "line";
      if ("line" in arg0) {
        str2 = "column";
        if ("column" in arg0) {
          num = 0;
          if (arg0.line > 0) {
            if (arg0.column >= 0) {
              if (!arg1) {
                if (!arg2) {
                }
                return;
              }
            }
          }
        }
      }
    }
    if (arg0) {
      str3 = "line";
      if ("line" in arg0) {
        str4 = "column";
        if ("column" in arg0) {
          if (arg1) {
            if ("line" in arg1) {
              if ("column" in arg1) {
                num2 = 0;
                if (arg0.line > 0) {
                  if (arg0.column >= 0) {
                    if (arg1.line > 0) {
                      if (arg1.column >= 0) {
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    obj = { generated: arg0, source: arg2, original: arg1, name: arg3 };
    error1 = new Error("Invalid mapping: " + JSON.stringify(obj));
    throw error1;
  }
  _serializeMappings() {
    self = this;
    _mappings = this._mappings;
    toArrayResult = _mappings.toArray();
    length = toArrayResult.length;
    num = 0;
    str = "";
    num2 = 0;
    num3 = 0;
    num4 = 0;
    num5 = 0;
    num6 = 1;
    num7 = 0;
    str2 = "";
    if (0 < length) {
      while (true) {
        tmp = toArrayResult[num];
        tmp2 = num;
        tmp3 = str;
        tmp4 = num2;
        tmp5 = num3;
        tmp6 = num4;
        tmp7 = num5;
        tmp8 = num6;
        tmp9 = num7;
        if (tmp.generatedLine !== num6) {
          sum = num6;
          str4 = "";
          tmp10 = num6;
          num8 = 0;
          str3 = "";
          if (tmp.generatedLine !== num6) {
            do {
              str4 = `;`;
              sum = sum + 1;
              num8 = 0;
              str3 = str4;
              tmp10 = sum;
              generatedLine = tmp.generatedLine;
            } while (generatedLine !== sum);
          }
        } else {
          tmp10 = num6;
          num8 = num7;
          str3 = "";
          if (0 < num) {
            tmp28 = closure_0;
            tmp29 = closure_1;
            obj = closure_0(closure_1[0]);
            tmp10 = num6;
            num8 = num7;
            str3 = ",";
            sum6 = str;
            tmp23 = num2;
            tmp24 = num3;
            tmp25 = num4;
            tmp26 = num5;
            tmp27 = num6;
            generatedColumn = num7;
            num = num + 1;
            str = sum6;
            num2 = tmp23;
            num3 = tmp24;
            num4 = tmp25;
            num5 = tmp26;
            num6 = tmp27;
            num7 = generatedColumn;
            str2 = sum6;
            if (num >= length) {
              break;
            }
          }
        }
        tmp12 = closure_0;
        tmp13 = closure_1;
        encoder = closure_0(closure_1[3]);
        sum1 = str3 + encoder.encode(tmp.generatedColumn - num8);
        tmp15 = num2;
        tmp16 = num3;
        tmp17 = num4;
        originalColumn = num5;
        tmp18 = sum1;
        if (null != tmp.source) {
          _sources = self._sources;
          index = _sources.indexOf(tmp.source);
          encoder3 = tmp12(tmp13[3]);
          sum2 = sum1 + encoder3.encode(index - num2);
          encoder4 = tmp12(tmp13[3]);
          sum3 = sum2 + encoder4.encode(tmp.originalLine - 1 - num4);
          diff = tmp.originalLine - 1;
          encoder5 = tmp12(tmp13[3]);
          sum4 = sum3 + encoder5.encode(tmp.originalColumn - num5);
          tmp21 = num3;
          sum5 = sum4;
          if (null != tmp.name) {
            _names = self._names;
            index1 = _names.indexOf(tmp.name);
            encoder2 = tmp12(tmp13[3]);
            sum5 = sum4 + encoder2.encode(index1 - num3);
            tmp21 = index1;
          }
          tmp16 = tmp21;
          tmp18 = sum5;
          tmp15 = index;
          tmp17 = diff;
          originalColumn = tmp.originalColumn;
        }
        sum6 = str + tmp18;
        tmp23 = tmp15;
        tmp24 = tmp16;
        tmp25 = tmp17;
        tmp26 = originalColumn;
        tmp27 = tmp10;
        generatedColumn = tmp.generatedColumn;
      }
    }
    return str2;
  }
  _generateSourcesContent(arg0, arg1) {
    closure_0 = arg1;
    return arg0.map(function (item) {
      const self = this;
      if (this._sourcesContents) {
        let relativeResult = item;
        if (null != closure_0) {
          relativeResult = _mod12666.relative(tmp2, item);
        }
        const toSetStringResult = _mod12666.toSetString(relativeResult);
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        const _sourcesContents = self._sourcesContents;
        let tmp10 = null;
        if (typeof call === "unknown" ? hasOwnProperty(toSetStringResult) : call(_sourcesContents, toSetStringResult)) {
          tmp10 = self._sourcesContents[toSetStringResult];
        }
        return tmp10;
      } else {
        return null;
      }
    }, this);
  }
  toJSON() {
    self = this;
    obj = { version: this._version, sources: null, names: null, mappings: this._serializeMappings() };
    _sources = this._sources;
    obj.sources = _sources.toArray();
    _names = this._names;
    obj.names = _names.toArray();
    if (null != this._file) {
      obj.file = self._file;
    }
    if (null != self._sourceRoot) {
      obj.sourceRoot = self._sourceRoot;
    }
    if (self._sourcesContents) {
      obj.sourcesContent = self._generateSourcesContent(obj.sources, obj.sourceRoot);
    }
    return obj;
  }
  toString() {
    return JSON.stringify(this.toJSON());
  }
}
SourceMapGenerator.prototype._version = 3;

export { SourceMapGenerator };
