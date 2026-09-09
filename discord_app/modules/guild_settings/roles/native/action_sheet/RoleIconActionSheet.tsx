// === Module 17661: RoleIconActionSheet ===

// Module 17661 (RoleIconActionSheet)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4541 */;
import TableRow from "TableRow" /* 5619 */;
import TableRowGroup from "TableRowGroup" /* 5701 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7163 */;
import ActionSheet from "ActionSheet" /* 7211 */;
import GuildSettingsRolesActionCreators from "GuildSettingsRolesActionCreators" /* 17658 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import GuildSettingsRolesStore from "GuildSettingsRolesStore" /* 17644 */;

require = fn;
const UPLOAD_SMALL_SIZE = fn(1074).UPLOAD_SMALL_SIZE;
const EmojiIntention = fn(1374).EmojiIntention;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = ["image/png", "image/jpeg"];
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/roles/native/action_sheet/RoleIconActionSheet.tsx");

export default function RoleIconActionSheet(arg0) {
  ({ guildId: require, roleId } = arg0);
  dependencyMap = async function _handleUploadImage() {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_129_0 = undefined;
            let base64;
            let mimeType;
            tmp2(tmp5[7]).hideActionSheet();
            const obj8 = tmp2(tmp5[7]);
            let obj1 = { size, preferredMimeType: "image/png" };
            c3 = 1;
            c4 = 1;
            let obj2 = { value: _var(tmp5[8]).openImagePicker(obj1), done: false };
            return obj2;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_129_0 = value;
          base64 = closure_129_0.base64;
          mimeType = closure_129_0.mimeType;
          if (null == base64) {
            c4 = 3;
          } else {
            _var = mimeType;
            if (mimeType == null) {
              _var = "";
            }
            if (closure_1_9.includes(_var)) {
              obj = _var(tmp5[9]);
              if (dataUriFileSizeResult <= _var(tmp5[10]).ROLE_ICON_MAX_FILE_SIZE) {
                obj1 = _var(tmp5[13]);
                obj1.updateRoleIcon(closure_130_1, base64, null);
              }
              dataUriFileSizeResult = obj.dataUriFileSize(base64);
            }
          }
          obj2 = _var(tmp5[11]);
          const intl = _var(tmp5[12]).intl;
          obj2.presentError(intl.string(_var(tmp5[12]).t.HFyKsa));
        }
      } catch (tmp30) {
        c4 = tmp;
        throw tmp30;
      }
    }
  };
  let obj = initialize;
  const items = [GuildSettingsRolesStore];
  const items1 = [roleId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const role = GuildSettingsRolesStore.getRole(roleId);
    let icon;
    if (role != null) {
      icon = role.icon;
    }
    let tmp3 = null != icon;
    if (!tmp3) {
      let unicodeEmoji;
      if (role != null) {
        unicodeEmoji = role.unicodeEmoji;
      }
      tmp3 = null != unicodeEmoji;
    }
    return tmp3;
  }, items1);
  obj = { title: null };
  let intl = util.intl;
  obj.title = intl.string(util.t.B9grJw);
  const items2 = [closure_7(BottomSheetTitleHeader.BottomSheetTitleHeader, obj), ];
  obj = { label: null, subLabel: null, onPress: null };
  const intl2 = util.intl;
  obj.label = intl2.string(util.t.royWSB);
  const intl3 = util.intl;
  obj.subLabel = intl3.string(util.t["mz++Qq"]);
  obj.onPress = function handleUploadImage() {
    const self = this;
    const apply = closure_2.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  const items3 = [closure_7(TableRow.TableRow, obj), , ];
  let obj1 = { label: null, onPress: null };
  const intl4 = util.intl;
  obj1.label = intl4.string(util.t["/Ny2wZ"]);
  obj1.onPress = function handleSelectEmoji() {
    guildId(11153);
    let obj = { guildId, pickerIntention: constants.COMMUNITY_CONTENT, onPressEmoji: null };
    guildId = asyncGeneratorStep(async (arg0) => {
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
              closure_5 = tmp3;
              if (null == closure_0.id) {
                const optionallyDiverseSequence = closure_0.optionallyDiverseSequence;
                let surrogates = optionallyDiverseSequence;
                if (optionallyDiverseSequence == null) {
                  surrogates = closure_0.surrogates;
                }
                if (null != surrogates) {
                  closure_0(17658).updateRoleIcon(surrogates, null, tmp26);
                  const obj5 = closure_0(17658);
                }
              } else {
                c6 = 1;
                const tmp22 = closure_0(17658);
                closure_4 = tmp22;
                const updateRoleIcon = tmp22.updateRoleIcon;
                closure_2 = surrogates;
                c7 = 2;
                c8 = 1;
                let obj1 = { value: closure_0(17662).fetchCustomEmojiAsPngDataUri(closure_0.id), done: false };
                return obj1;
              }
            }
          } else {
            if (1 === tmp7) {
              c6 = 0;
              obj1 = closure_0(4271);
              const intl = closure_0(1114).intl;
              obj1.presentError(intl.string(closure_0(1114).t.R0RpRX));
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 !== 2) {
              updateRoleIcon(closure_2, value, null);
              c6 = 0;
            }
            c6 = 0;
            c8 = 3;
            obj = { value, done: true };
            return obj;
          }
          c8 = 3;
        } catch (tmp31) {
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp31;
          } else {
            c7 = tmp;
          }
        }
      }
    });
    obj.onPressEmoji = function onPressEmoji(arg0) {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    const result = obj.openEmojiPickerActionSheet(obj, "stack");
  };
  items3[1] = closure_7(TableRow.TableRow, obj1);
  let tmp5Result = null;
  if (stateFromStores) {
    let obj2 = { variant: "danger", label: null, onPress: null };
    const intl5 = util.intl;
    obj2.label = intl5.string(util.t["uY+Nk/"]);
    obj2.onPress = function handleRemoveIcon() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      GuildSettingsRolesActionCreators.updateRoleIcon(roleId, null, null);
    };
    tmp5Result = closure_7(TableRow.TableRow, obj2);
  }
  let obj3 = { children: null };
  items3[2] = tmp5Result;
  items2[1] = closure_8(TableRowGroup.TableRowGroup, { hasIcons: false, children: items3 });
  obj3.children = items2;
  return closure_8(ActionSheet.ActionSheet, obj3);
};