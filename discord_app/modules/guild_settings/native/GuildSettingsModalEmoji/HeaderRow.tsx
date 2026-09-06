// === Module 17568: HeaderRow ===

// Module 17568 (HeaderRow)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4556 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildSettingsEmojiStore from "GuildSettingsEmojiStore" /* 17562 */;

require = fn;
function HeaderRow(guild) {
  guild = guild.guild;
  ({ emojisLength: importDefault, onSelectRolesForEmoji: dependencyMap, uploadDisabled } = guild);
  ({ isUploading, description } = guild);
  if (uploadDisabled === undefined) {
    uploadDisabled = false;
  }
  _slicedToArray = undefined;
  noop = undefined;
  c6 = undefined;
  c7 = undefined;
  closure_8 = async function _handleImagePicker() {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_4 = tmp3;
            closure_3 = tmp7;
            closure_131_0 = undefined;
            let base64;
            let originalMd5;
            _slicedToArray(true);
            noop(null);
            React5(guild(upload[14]).v4());
            c5 = 1;
            const obj7 = guild(upload[14]);
            const obj1 = { guild_id: id.id, upload_id };
            closure_1(upload[12]).track(constants2.EMOJI_UPLOAD_STARTED, obj1);
            const obj8 = closure_1(upload[12]);
            const obj2 = { size };
            c7 = 2;
            c8 = 1;
            const obj3 = { value: closure_1(upload[15]).openImagePicker(obj2), done: false };
            return obj3;
          }
        } else if (1 === tmp7) {
          c5 = 0;
          closure_132_4(false);
          throw upload_id;
        } else {
          if (2 === tmp7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              closure_132_4(false);
              c8 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_131_0 = value;
              base64 = closure_131_0.base64;
              originalMd5 = closure_131_0.originalMd5;
              if (null != base64) {
                upload = function upload(image, originalMd5, roles) {
                  const combined = "emoji_" + closure_1 + 1;
                  closure_1_0(10336);
                  let obj = { guildId: image.id, image, name: combined, roles, originalMd5 };
                  const uploadEmojiResult = obj.uploadEmoji(obj);
                  obj.uploadEmoji(obj).then(() => {
                    closure_2_1(1242);
                    const obj = { guild_id: image.id, upload_id };
                    return obj.track(constants.EMOJI_UPLOAD_COMPLETED, obj);
                  }).catch((error) => {
                    const body = error.body;
                    if (null == body) {
                      if (null != undefined) {
                        closure_2_5(undefined);
                      }
                    } else if (body.code === constants.TOO_MANY_EMOJI) {
                      const intl3 = image(upload[13]).intl;
                      let stringResult = intl3.string(image(upload[13]).t["jP/Rqm"]);
                    } else if (body.code === tmp.TOO_MANY_ANIMATED_EMOJI) {
                      const intl2 = image(upload[13]).intl;
                      stringResult = intl2.string(image(upload[13]).t["6v5dP/"]);
                    } else if (null != body.image) {
                      closure_1(upload[12]);
                      let obj = { guild_id: closure_2_0.id, file_size: null, upload_id: null };
                      const _Buffer = Buffer;
                      obj.file_size = Buffer.byteLength(image);
                      obj.upload_id = upload_id;
                      obj.track(constants2.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, obj);
                      const intl = image(upload[13]).intl;
                      obj = { maxSize };
                      stringResult = intl.formatToPlainString(image(upload[13]).t.kIO9jy, obj);
                    }
                  });
                };
                closure_1 = base64;
                guild = originalMd5;
                let tmp22;
                if (closure_132_2 != null) {
                  tmp22 = closure_132_2();
                }
                c7 = 3;
                c8 = 1;
                const obj5 = { value: tmp22, done: false };
                return obj5;
              } else {
                c5 = 0;
                closure_132_4(false);
                c8 = 3;
              }
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 !== 2) {
            upload(closure_1, guild, value);
          }
          c5 = 0;
          closure_132_4(false);
          c8 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp31) {
        upload_id = tmp31;
        if (tmp4 === c5) {
          c8 = tmp2;
          throw tmp31;
        } else {
          c7 = tmp;
        }
      }
    }
  };
  const tmp = closure_16();
  const uploadListItem = tmp;
  [tmp3, c4] = _slicedToArray(noop.useState(false), 2);
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  [tmp5, c5] = _slicedToArray(noop.useState(null), 2);
  const tmp4 = _slicedToArray(noop.useState(null), 2);
  [c6, c7] = _slicedToArray(noop.useState(""), 2);
  let obj = guild(9671);
  let canCreateExpressions = obj.useManageResourcePermissions(guild).canCreateExpressions;
  let intl = guild(1114).intl;
  obj = { id: null, text: null };
  const tmp6 = _slicedToArray(noop.useState(""), 2);
  obj.id = "GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_" + 1;
  obj.text = intl.string(guild(1114).t.N2qTQ3);
  let items = [obj, , , ];
  let intl2 = guild(1114).intl;
  obj = { maxSize: EMOJI_MAX_FILESIZE_KB };
  let obj1 = { id: null, text: null };
  let stringResult = intl.string(guild(1114).t.N2qTQ3);
  obj1.id = "GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_" + 2;
  obj1.text = intl2.formatToPlainString(guild(1114).t.gfAXoR, obj);
  items[1] = obj1;
  let intl3 = guild(1114).intl;
  let obj2 = { id: null, text: null };
  const formatToPlainStringResult = intl2.formatToPlainString(guild(1114).t.gfAXoR, obj);
  obj2.id = "GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_" + 3;
  obj2.text = intl3.string(guild(1114).t.rnwKPH);
  items[2] = obj2;
  const intl4 = guild(1114).intl;
  let obj3 = { id: null, text: null };
  const stringResult1 = intl3.string(guild(1114).t.rnwKPH);
  obj3.id = "GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_" + 4;
  obj3.text = intl4.string(guild(1114).t["8Vr5Qd"]);
  items[3] = obj3;
  let obj4 = { style: tmp.headerContainer, children: null };
  if (canCreateExpressions) {
    let obj5 = {
      size: "sm",
      loading: isUploading,
      onPress: function handleImagePicker() {
          const self = this;
          const apply = closure_8.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        },
      text: null,
      disabled: null
    };
    const intl5 = tmp7(1114).intl;
    obj5.text = intl5.string(tmp7(1114).t["DU0dy/"]);
    obj5.disabled = uploadDisabled;
    canCreateExpressions = closure_14(tmp7(4975).Button, obj5);
  }
  const items1 = [canCreateExpressions, , ];
  let tmp13Result = null != tmp5;
  if (tmp13Result) {
    const obj6 = { style: tmp.errorText, variant: "text-sm/medium", color: "text-feedback-critical", children: tmp5 };
    tmp13Result = closure_14(tmp7(4556).Text, obj6);
  }
  let obj7 = { children: null };
  items1[1] = tmp13Result;
  let obj8 = { style: tmp.uploadInstructionsContainer, children: null };
  const items2 = [closure_14(guild(4556).Text, { variant: "text-sm/medium", color: "text-muted", children: description }), , ];
  const obj9 = { variant: "text-xs/bold", color: "text-muted", style: tmp.uploadInstructionsHeading, children: null };
  const intl6 = tmp7(1114).intl;
  const stringResult2 = intl4.string(guild(1114).t["8Vr5Qd"]);
  obj9.children = intl6.string(guild(1114).t.jrXfyw).toUpperCase();
  items2[1] = closure_14(guild(4556).Text, obj9);
  items2[2] = closure_14(c7, {
    style: tmp.uploadInstructionsList,
    data: items,
    keyExtractor(id) {
      return id.id;
    },
    renderItem: function renderUploadInstructionsListItem(item) {
      item = item.item;
      const obj = { style: uploadListItem.uploadListItem, variant: "text-xs/medium", color: "text-muted", accessibilityLabel: item.text, children: null };
      const items = ["\u2022", " ", item.text];
      obj.children = items;
      return map1(Text_Text.Text, obj);
    }
  });
  obj8.children = items2;
  items1[2] = closure_13(c6, obj8);
  obj4.children = items1;
  obj7.children = closure_13(c6, obj4);
  return closure_14(closure_15, obj7);
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, FlatList: closure_7 } = get_ActivityIndicator);
const Constants = fn(1074);
({ AbortCodes: closure_9, AnalyticEvents: c10, UPLOAD_SMALL_SIZE: closure_11 } = Constants);
const EMOJI_MAX_FILESIZE_KB = fn(1374).EMOJI_MAX_FILESIZE_KB;
const jsxProd = fn(21);
({ jsxs: map1, jsx: closure_14, Fragment: closure_15 } = jsxProd);
fn(4560);
let createStyles = { uploadInstructionsContainer: null, uploadInstructionsHeading: null, uploadInstructionsList: null, headerContainer: null, errorText: null, uploadListItem: null };
createStyles = { marginTop: nativeDefault.space.PX_12 };
createStyles.uploadInstructionsContainer = createStyles;
createStyles.uploadInstructionsHeading = { marginVertical: nativeDefault.space.PX_12 };
createStyles.uploadInstructionsList = { marginLeft: 8 };
let obj1 = { marginVertical: nativeDefault.space.PX_12 };
createStyles.headerContainer = { paddingTop: nativeDefault.space.PX_16 };
let obj2 = { paddingTop: nativeDefault.space.PX_16 };
createStyles.errorText = { marginTop: nativeDefault.space.PX_8 };
let obj3 = { marginTop: nativeDefault.space.PX_8 };
createStyles.uploadListItem = { paddingRight: nativeDefault.space.PX_8 };
let closure_16 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalEmoji/HeaderRow.tsx");

export const ConnectedHeaderRow = function ConnectedHeaderRow(arg0) {
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    const merged = Object.assign(arg0, undefined);
    const items = [GuildSettingsEmojiStore];
    const obj = { isUploading: null };
    obj.isUploading = obj.useStateFromStores(items, () => uploadingEmoji.isUploadingEmoji());
    const merged1 = Object.assign(merged);
    return closure_1_14(HeaderRow, obj);
  }
};