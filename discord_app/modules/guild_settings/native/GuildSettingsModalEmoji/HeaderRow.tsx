import closure_3 from "ME";
import _slicedToArray from "_slicedToArray";
import set from "set";
import get_ActivityIndicator from "Text";
import initialize from "initialize";
import ME from "ME";
import { EMOJI_MAX_FILESIZE_KB } from "set";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let closure_14;
let closure_15;
let closure_6;
let error;
let map1;
let unpackModuleId;
const require = arg1;
function HeaderRow(guild) {
  let c4;
  let c5;
  let c6;
  let c7;
  let dependencyMap;
  let description;
  let importDefault;
  let isUploading;
  let tmp3;
  let tmp5;
  let uploadDisabled;
  guild = guild.guild;
  ({ emojisLength: importDefault, onSelectRolesForEmoji: dependencyMap, uploadDisabled } = guild);
  ({ isUploading, description } = guild);
  if (uploadDisabled === undefined) {
    uploadDisabled = false;
  }
  let c3;
  let callback;
  let React;
  c6 = undefined;
  c7 = undefined;
  function _handleImagePicker() {
    const self = this;
    const tmp = _undefined(function*() {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c8 = 2;
          if (0 === v02) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const callback = tmp3;
              let closure_3 = tmp7;
              let closure_0;
              let base64;
              let upload;
              outer1_4(true);
              v0(null);
              v02(outer1_0(outer1_2[14]).v4());
              v0 = 1;
              const obj7 = outer1_0(outer1_2[14]);
              const obj1 = { guild_id: null, upload_id: null };
              obj1[0] = outer1_0.id;
              obj1[1] = outer1_6;
              outer1_1(outer1_2[12]).track(outer1_10.EMOJI_UPLOAD_STARTED, obj1);
              const obj8 = outer1_1(outer1_2[12]);
              const obj2 = { size: null };
              obj2[0] = outer1_11;
              v02 = 2;
              c8 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = outer1_1(outer1_2[15]).openImagePicker(obj2);
              return obj3;
            }
          } else if (1 === tmp7) {
            v0 = 0;
            callback(false);
            throw closure_6;
          } else {
            if (2 === tmp7) {
              if (arg0 === 1) {
                c8 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                v0 = 0;
                callback(false);
                c8 = 3;
                const obj4 = { value: null, done: true };
                obj4[0] = arg1;
                return obj4;
              } else {
                closure_0 = arg1;
                base64 = closure_0.base64;
                upload = closure_0.originalMd5;
                if (null != base64) {
                  upload = function upload(image, originalMd5, roles) {
                    const lib = image;
                    const combined = "emoji_" + closure_1 + 1;
                    let obj = lib(upload[11]);
                    obj = { guildId: lib.id, image, name: combined, roles, originalMd5 };
                    const uploadEmojiResult = obj.uploadEmoji(obj);
                    obj.uploadEmoji(obj).then(() => {
                      let obj = outer1_1(outer1_2[12]);
                      obj = { guild_id: image.id, upload_id: closure_6 };
                      return obj.track(outer1_10.EMOJI_UPLOAD_COMPLETED, obj);
                    }).catch((body) => {
                      body = body.body;
                      if (null == body) {
                        if (null != undefined) {
                          outer1_5(undefined);
                        }
                      } else if (body.code === outer2_9.TOO_MANY_EMOJI) {
                        const intl3 = image(upload[13]).intl;
                        let stringResult = intl3.string(image(upload[13]).t["jP/Rqm"]);
                      } else if (body.code === tmp.TOO_MANY_ANIMATED_EMOJI) {
                        const intl2 = image(upload[13]).intl;
                        stringResult = intl2.string(image(upload[13]).t["6v5dP/"]);
                      } else if (null != body.image) {
                        let obj = callback(upload[12]);
                        obj = { guild_id: null, file_size: null, upload_id: null };
                        obj[0] = image.id;
                        const _Buffer = Buffer;
                        obj[1] = Buffer.byteLength(image);
                        obj[2] = outer1_6;
                        obj.track(outer2_10.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, obj);
                        const intl = image(upload[13]).intl;
                        obj = { maxSize: null };
                        obj[0] = outer2_12;
                        stringResult = intl.formatToPlainString(image(upload[13]).t.kIO9jy, obj);
                      }
                    });
                  };
                  closure_0 = upload;
                  let tmp22;
                  if (upload != null) {
                    tmp22 = upload();
                  }
                  v02 = 3;
                  c8 = 1;
                  const obj5 = { value: null, done: false };
                  obj5[0] = tmp22;
                  return obj5;
                } else {
                  v0 = 0;
                  callback(false);
                  c8 = 3;
                }
              }
            } else if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              upload(base64, closure_0, arg1);
            }
            v0 = 0;
            callback(false);
            c8 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp31) {
          closure_6 = tmp31;
          if (tmp4 === v0) {
            c8 = tmp2;
            throw tmp31;
          } else {
            v02 = tmp;
          }
        }
      }
    });
    const _handleImagePicker = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = createCacheKey();
  c3 = tmp;
  [tmp3, c4] = callback(React.useState(false), 2);
  const tmp2 = callback(React.useState(false), 2);
  [tmp5, c5] = callback(React.useState(null), 2);
  const tmp4 = callback(React.useState(null), 2);
  [c6, c7] = callback(React.useState(""), 2);
  let obj = guild(8270);
  let canCreateExpressions = obj.useManageResourcePermissions(guild).canCreateExpressions;
  let intl = guild(1236).intl;
  obj = { id: null, text: null };
  const tmp6 = callback(React.useState(""), 2);
  obj[0] = "GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_" + 1;
  obj[1] = intl.string(guild(1236).t.N2qTQ3);
  let items = [obj, , , ];
  let intl2 = guild(1236).intl;
  obj = { maxSize: EMOJI_MAX_FILESIZE_KB };
  let obj1 = { id: null, text: null };
  let stringResult = intl.string(guild(1236).t.N2qTQ3);
  obj1[0] = "GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_" + 2;
  obj1[1] = intl2.formatToPlainString(guild(1236).t.gfAXoR, obj);
  items[1] = obj1;
  let intl3 = guild(1236).intl;
  let obj2 = { id: null, text: null };
  const formatToPlainStringResult = intl2.formatToPlainString(guild(1236).t.gfAXoR, obj);
  obj2[0] = "GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_" + 3;
  obj2[1] = intl3.string(guild(1236).t.rnwKPH);
  items[2] = obj2;
  const intl4 = guild(1236).intl;
  let obj3 = { id: null, text: null };
  const stringResult1 = intl3.string(guild(1236).t.rnwKPH);
  obj3[0] = "GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_" + 4;
  obj3[1] = intl4.string(guild(1236).t["8Vr5Qd"]);
  items[3] = obj3;
  let obj4 = { style: tmp.headerContainer, children: null };
  if (canCreateExpressions) {
    let obj5 = { size: "sm", loading: null, onPress: null, text: null, disabled: null };
    obj5[1] = tmp3;
    obj5[2] = function handleImagePicker() {
      const self = this;
      const apply = _handleImagePicker.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    const intl5 = tmp7(1236).intl;
    obj5[3] = intl5.string(tmp7(1236).t["DU0dy/"]);
    obj5[4] = uploadDisabled;
    canCreateExpressions = tmp13(tmp7(4604).Button, obj5);
  }
  const items1 = [canCreateExpressions, , ];
  let tmp13Result = null != tmp5;
  if (tmp13Result) {
    const obj6 = { style: null, variant: "text-sm/medium", color: "text-feedback-critical", children: null };
    obj6[0] = tmp.errorText;
    obj6[3] = tmp5;
    tmp13Result = tmp13(tmp7(4189).Text, obj6);
  }
  let obj7 = { children: null };
  items1[1] = tmp13Result;
  let obj8 = { style: tmp.uploadInstructionsContainer, children: null };
  const items2 = [closure_14(guild(4189).Text, { variant: "text-sm/medium", color: "text-muted", children: description }), , ];
  const obj9 = { variant: "text-xs/bold", color: "text-muted", style: tmp.uploadInstructionsHeading, children: null };
  const intl6 = tmp7(1236).intl;
  const stringResult2 = intl4.string(guild(1236).t["8Vr5Qd"]);
  const tmp14 = closure_15;
  obj9[3] = intl6.string(guild(1236).t.jrXfyw).toUpperCase();
  items2[1] = closure_14(guild(4189).Text, obj9);
  items2[2] = closure_14(c7, {
    style: tmp.uploadInstructionsList,
    data: items,
    keyExtractor(id) {
      return id.id;
    },
    renderItem: function renderUploadInstructionsListItem(item) {
      item = item.item;
      const items = ["\u2022", " ", item.text];
      return outer1_13(guild(outer1_2[17]).Text, { style: _undefined.uploadListItem, variant: "text-xs/medium", color: "text-muted", accessibilityLabel: item.text, children: items });
    }
  });
  obj8[1] = items2;
  items1[2] = closure_13(c6, obj8);
  obj4[1] = items1;
  obj7[0] = closure_13(c6, obj4);
  return closure_14(tmp14, obj7);
}
({ View: closure_6, FlatList: error } = get_ActivityIndicator);
({ AbortCodes: c9, AnalyticEvents: c10, UPLOAD_SMALL_SIZE: unpackModuleId } = ME);
({ jsxs: map1, jsx: closure_14, Fragment: closure_15 } = jsxProd);
createCacheKey = { uploadInstructionsContainer: null, uploadInstructionsHeading: null, uploadInstructionsList: null, headerContainer: null, errorText: null, uploadListItem: null };
createCacheKey = { marginTop: require("Themes").space.PX_12 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginVertical: require("Themes").space.PX_12 };
createCacheKey[2] = { marginLeft: 8 };
let obj1 = { marginVertical: require("Themes").space.PX_12 };
createCacheKey[3] = { paddingTop: require("Themes").space.PX_16 };
let obj2 = { paddingTop: require("Themes").space.PX_16 };
createCacheKey[4] = { marginTop: require("Themes").space.PX_8 };
let obj3 = { marginTop: require("Themes").space.PX_8 };
createCacheKey[5] = { paddingRight: require("Themes").space.PX_8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj4 = { paddingRight: require("Themes").space.PX_8 };
const result = require("noop").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalEmoji/HeaderRow.tsx");

export const ConnectedHeaderRow = function ConnectedHeaderRow(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError();
  } else {
    const merged = Object.assign(arg0, undefined);
    let obj = require(589) /* initialize */;
    const items = [initialize];
    obj = { isUploading: null };
    obj[0] = obj.useStateFromStores(items, () => uploadingEmoji.isUploadingEmoji());
    const merged1 = Object.assign(merged);
    return callback2(HeaderRow, obj);
  }
};