// === Module 17740: HeaderRow ===

// Module 17740 (HeaderRow)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import EmojiConstants from "EmojiConstants" /* 1380 */;
import Text_Text from "Text/Text" /* 4886 */;
import _objectDestructuringEmpty from "_objectDestructuringEmpty" /* 11870 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildSettingsEmojiStore from "GuildSettingsEmojiStore" /* 17734 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c8, closure_1, upload_id;

let c10;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let unpackModuleId;
function HeaderRow(guild) {
  let _undefined;
  let _undefined2;
  let _undefined3;
  let c4;
  let c5;
  let c6;
  let c7;
  let description;
  let formatToPlainStringResult;
  let intl5;
  let isUploading;
  let items1;
  let items2;
  let str;
  let stringResult;
  let stringResult1;
  let stringResult2;
  let tmp3;
  let tmp5;
  let uploadDisabled;
  guild = guild.guild;
  ({ emojisLength: importDefault, onSelectRolesForEmoji: dependencyMap, uploadDisabled } = guild);
  ({ isUploading, description } = guild);
  if (uploadDisabled === undefined) {
    uploadDisabled = false;
  }
  c4 = undefined;
  _slicedToArray = undefined;
  react = undefined;
  c7 = undefined;
  let obj = function _handleImagePicker() {
    obj = _asyncToGenerator(async () => {
      let closure_0;
      let closure_6;
      let maxSize;
      let obj10;
      let tmp;
      let upload;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c5;
        try {
          let base64;
          let originalMd5;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_4 = tmp;
              let closure_3 = tmp4;
              id = undefined;
              base64 = undefined;
              originalMd5 = undefined;
              _undefined(true);
              _undefined2(null);
              const obj7 = id(upload[15]);
              _undefined3(obj7.v4());
              c5 = 1;
              const obj4 = { guild_id: id.id, upload_id };
              const obj8 = closure_1(upload[13]);
              const trackResult = obj8.track(constants2.EMOJI_UPLOAD_STARTED, obj4);
              const obj5 = { size };
              c7 = 2;
              c8 = 1;
              const obj6 = { value: obj10.openImagePicker(obj5), done: false };
              obj10 = closure_1(upload[16]);
              return obj6;
            }
          } else if (1 === c7) {
            c5 = 0;
            closure_132_4(false);
            throw upload_id;
          } else {
            if (2 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                closure_132_4(false);
                c8 = 3;
                const obj9 = { value, done: true };
                return obj9;
              } else {
                id = value;
                base64 = id.base64;
                originalMd5 = id.originalMd5;
                if (null != base64) {
                  upload = function upload(image, originalMd5, roles) {
                    const combined = "emoji_" + closure_1 + 1;
                    obj = closure_1_0(upload[12]);
                    let obj2 = { guildId: image.id, image, name: combined, roles, originalMd5 };
                    const uploadEmojiResult = obj.uploadEmoji(obj2);
                    const nextPromise = uploadEmojiResult.then(() => {
                      obj = closure_2_1(upload[13]);
                      const obj2 = { guild_id: image.id, upload_id };
                      return obj.track(constants.EMOJI_UPLOAD_COMPLETED, obj2);
                    });
                    nextPromise.catch((error) => {
                      const body = error.body;
                      let tmp;
                      if (null != body) {
                        let stringResult;
                        if (body.code === constants.TOO_MANY_EMOJI) {
                          const intl3 = image(upload[14]).intl;
                          stringResult = intl3.string(image(upload[14]).t["jP/Rqm"]);
                        } else if (body.code === tmp2.TOO_MANY_ANIMATED_EMOJI) {
                          const intl2 = image(upload[14]).intl;
                          stringResult = intl2.string(image(upload[14]).t["6v5dP/"]);
                        } else if (null != body.image) {
                          const _Buffer = Buffer;
                          obj = { guild_id: closure_2_0.id, file_size: Buffer.byteLength(image), upload_id };
                          const track = closure_1(upload[13]).track;
                          const EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED = constants2.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED;
                          closure_1(upload[13]);
                          track(EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, obj);
                          const intl = image(upload[14]).intl;
                          const obj2 = { maxSize };
                          stringResult = intl.formatToPlainString(image(upload[14]).t.kIO9jy, obj2);
                        }
                        tmp = stringResult;
                      }
                      if (null != tmp) {
                        closure_2_5(tmp);
                      }
                    });
                  };
                  closure_1 = base64;
                  id = originalMd5;
                  let tmp19;
                  if (closure_132_2 != null) {
                    tmp19 = closure_132_2();
                  }
                  c7 = 3;
                  c8 = 1;
                  const obj11 = { value: tmp19, done: false };
                  return obj11;
                }
              }
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              closure_132_4(false);
              c8 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const tmp8 = upload(closure_1, id, value);
            }
            c5 = 0;
            closure_132_4(false);
            c8 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp28) {
          upload_id = tmp28;
          if (0 === c5) {
            c8 = 3;
            throw tmp28;
          } else {
            c7 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  let tmp = closure_17();
  const uploadListItem = tmp;
  const tmp2 = _slicedToArray(react.useState(false), 2);
  [tmp3, c4] = tmp2;
  const tmp4 = _slicedToArray(react.useState(null), 2);
  [tmp5, c5] = tmp4;
  [c6, c7] = _slicedToArray(react.useState(""), 2);
  const tmp6 = _slicedToArray(react.useState(""), 2);
  obj = guild(9169);
  let canCreateExpressions = obj.useManageResourcePermissions(guild).canCreateExpressions;
  let intl = guild(1126).intl;
  let obj2 = { id: "GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_" + 1, text: stringResult };
  stringResult = intl.string(guild(1126).t.N2qTQ3);
  let items = [obj2, , , ];
  let intl2 = guild(1126).intl;
  let obj3 = { maxSize: EMOJI_MAX_FILESIZE_KB };
  let obj4 = { id: "GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_" + 2, text: formatToPlainStringResult };
  items[1] = obj4;
  formatToPlainStringResult = intl2.formatToPlainString(guild(1126).t.gfAXoR, obj3);
  let intl3 = guild(1126).intl;
  let obj5 = { id: "GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_" + 3, text: stringResult1 };
  items[2] = obj5;
  stringResult1 = intl3.string(guild(1126).t.rnwKPH);
  const intl4 = guild(1126).intl;
  let obj6 = { id: "GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_" + 4, text: stringResult2 };
  items[3] = obj6;
  let obj7 = { style: tmp.headerContainer, children: items1 };
  stringResult2 = intl4.string(guild(1126).t["8Vr5Qd"]);
  if (canCreateExpressions) {
    const Button = tmp7(5594).Button;
    let obj8 = {
      size: "sm",
      loading: isUploading,
      onPress: function handleImagePicker() {
          return obj(...arguments);
        },
      text: intl5.string(tmp7(1126).t["DU0dy/"]),
      disabled: uploadDisabled
    };
    intl5 = tmp7(1126).intl;
    canCreateExpressions = closure_15(Button, obj8);
  }
  items1 = [canCreateExpressions, , ];
  let tmp13Result = null != tmp5;
  if (tmp13Result) {
    let obj9 = { style: tmp.errorText, variant: "text-sm/medium", color: "text-feedback-critical", children: tmp5 };
    tmp13Result = closure_15(tmp7(4886).Text, obj9);
  }
  let obj10 = { children: closure_14(tmp16, obj7) };
  items1[1] = tmp13Result;
  let obj11 = { style: tmp.uploadInstructionsContainer, children: items2 };
  items2 = [closure_15(tmp7(4886).Text, { variant: "text-sm/medium", color: "text-muted", children: description }), , ];
  const obj12 = { variant: "text-xs/bold", color: "text-muted", style: tmp.uploadInstructionsHeading, children: str.toUpperCase() };
  const Text = tmp7(4886).Text;
  const intl6 = tmp7(1126).intl;
  str = intl6.string(guild(1126).t.jrXfyw);
  items2[1] = closure_15(Text, obj12);
  const obj13 = {
    style: tmp.uploadInstructionsList,
    data: items,
    keyExtractor(id) {
      return id.id;
    },
    renderItem: function renderUploadInstructionsListItem(item) {
      let items;
      item = item.item;
      obj = { style: uploadListItem.uploadListItem, variant: "text-xs/medium", color: "text-muted", accessibilityLabel: item.text, children: items };
      items = ["\u2022", " ", item.text];
      return authStore2(Text_Text.Text, obj);
    }
  };
  items2[2] = closure_15(obj, obj13);
  items1[2] = closure_14(c7, obj11);
  return closure_15(closure_16, obj10);
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ View: metroImportDefault, FlatList: metroImportAll } = react_native);
({ AbortCodes: c10, AnalyticEvents: unpackModuleId, UPLOAD_SMALL_SIZE: closure_12 } = Constants);
const EMOJI_MAX_FILESIZE_KB = EmojiConstants.EMOJI_MAX_FILESIZE_KB;
({ jsxs: closure_14, jsx: closure_15, Fragment: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = { uploadInstructionsContainer: obj2, uploadInstructionsHeading: obj3, uploadInstructionsList: { marginLeft: 8 }, headerContainer: obj4, errorText: obj5, uploadListItem: obj6 };
obj2 = { marginTop: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { marginVertical: nativeDefault.space.PX_12 };
obj4 = { paddingTop: nativeDefault.space.PX_16 };
obj5 = { marginTop: nativeDefault.space.PX_8 };
obj6 = { paddingRight: nativeDefault.space.PX_8 };
let closure_17 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConnectedHeaderRow(arg0) {
  let tmp10;
  let tmp4;
  let tmp9;
  let uploadingEmoji;
  const obj = react2;
  const cResult = obj.c(7);
  if (cResult[0] !== arg0) {
    const _Object = Object;
    _objectDestructuringEmpty(arg0);
    const obj2 = assign({}, arg0);
    cResult[0] = arg0;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildSettingsEmojiStore];
    const fn = function l() {
      return uploadingEmoji.isUploadingEmoji();
    };
    cResult[2] = items;
    cResult[3] = fn;
    tmp10 = fn;
    tmp9 = items;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp9, tmp10);
  if (cResult[4] === stateFromStores) {
    let tmp13;
    if (cResult[5] === tmp4) {
      tmp13 = cResult[6];
    }
    return tmp13;
  }
  const obj3 = { isUploading: stateFromStores };
  const merged = Object.assign(tmp4);
  const tmp15 = closure_15(HeaderRow, obj3);
  cResult[4] = stateFromStores;
  cResult[5] = tmp4;
  cResult[6] = tmp15;
  tmp13 = tmp15;
}) : (function ConnectedHeaderRow(arg0) {
  let obj;
  let uploadingEmoji;
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    const merged = Object.assign(arg0, undefined);
    const items = [GuildSettingsEmojiStore];
    const obj2 = { isUploading: obj.useStateFromStores(items, () => uploadingEmoji.isUploadingEmoji()) };
    obj = get_initialized;
    const merged1 = Object.assign(merged);
    return closure_15(HeaderRow, obj2);
  }
});
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalEmoji/HeaderRow.tsx");

export const ConnectedHeaderRow = tmp6;