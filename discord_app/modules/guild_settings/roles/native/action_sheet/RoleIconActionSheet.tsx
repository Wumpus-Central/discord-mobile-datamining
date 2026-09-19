// === Module 18050: RoleIconActionSheet ===

// Module 18050 (RoleIconActionSheet)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import Text_Text from "Text/Text" /* 4752 */;
import TableRow from "TableRow" /* 5817 */;
import TableRowGroup from "TableRowGroup" /* 5899 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7389 */;
import ActionSheet from "ActionSheet" /* 7437 */;
import GuildSettingsRolesActionCreators from "GuildSettingsRolesActionCreators" /* 18047 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import GuildSettingsRolesStore from "GuildSettingsRolesStore" /* 18033 */;

require = fn;
const UPLOAD_SMALL_SIZE = fn(1074).UPLOAD_SMALL_SIZE;
const EmojiIntention = fn(1375).EmojiIntention;
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
        const obj4 = { value, done: true };
        return obj4;
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
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_129_0 = undefined;
            let base64;
            let mimeType;
            tmp2(tmp5[7]).hideActionSheet();
            const obj8 = tmp2(tmp5[7]);
            const obj6 = { size, preferredMimeType: "image/png" };
            c3 = 1;
            c4 = 1;
            const obj7 = { value: _var(tmp5[8]).openImagePicker(obj6), done: false };
            return obj7;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj10 = { value, done: true };
          return obj10;
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
              const obj = _var(tmp5[9]);
              if (dataUriFileSizeResult <= _var(tmp5[10]).ROLE_ICON_MAX_FILE_SIZE) {
                _var(tmp5[13]).updateRoleIcon(closure_130_1, base64, null);
                const obj2 = _var(tmp5[13]);
              }
              dataUriFileSizeResult = _var(tmp5[9]).dataUriFileSize(base64);
            }
          }
          const intl = _var(tmp5[12]).intl;
          _var(tmp5[11]).presentError(intl.string(_var(tmp5[12]).t.HFyKsa));
          const obj3 = _var(tmp5[11]);
        }
      } catch (tmp30) {
        c4 = tmp;
        throw tmp30;
      }
    }
  };
  const items = [GuildSettingsRolesStore];
  const items1 = [roleId];
  const stateFromStores = initialize.useStateFromStores(items, () => {
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
  let obj2 = { title: null };
  let intl = util.intl;
  obj2.title = intl.string(util.t.B9grJw);
  const items2 = [closure_7(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2), , ];
  let obj3 = { variant: "text-sm/medium", color: "text-muted", children: null };
  const intl2 = util.intl;
  obj3.children = intl2.string(util.t.I3YQeV);
  items2[1] = closure_7(Text_Text.Text, obj3);
  let obj4 = { label: null, subLabel: null, onPress: null };
  const intl3 = util.intl;
  obj4.label = intl3.string(util.t.royWSB);
  const intl4 = util.intl;
  obj4.subLabel = intl4.string(util.t["mz++Qq"]);
  obj4.onPress = function handleUploadImage() {
    const self = this;
    const apply = closure_2.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  const items3 = [closure_7(TableRow.TableRow, obj4), , ];
  let obj5 = { label: null, onPress: null };
  const intl5 = util.intl;
  obj5.label = intl5.string(util.t["/Ny2wZ"]);
  obj5.onPress = function handleSelectEmoji() {
    let obj2 = { guildId, pickerIntention: constants.COMMUNITY_CONTENT, onPressEmoji: null };
    guildId = asyncGeneratorStep(async (arg0) => {
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj4 = { value, done: true };
          return obj4;
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
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_5 = tmp3;
              if (null == closure_0.id) {
                const optionallyDiverseSequence = closure_0.optionallyDiverseSequence;
                let surrogates = optionallyDiverseSequence;
                if (optionallyDiverseSequence == null) {
                  surrogates = closure_0.surrogates;
                }
                if (null != surrogates) {
                  closure_0(18047).updateRoleIcon(surrogates, null, tmp26);
                  const obj5 = closure_0(18047);
                }
              } else {
                c6 = 1;
                const tmp22 = closure_0(18047);
                closure_4 = tmp22;
                const updateRoleIcon = tmp22.updateRoleIcon;
                closure_2 = surrogates;
                c7 = 2;
                c8 = 1;
                const obj7 = { value: closure_0(18051).fetchCustomEmojiAsPngDataUri(closure_0.id), done: false };
                return obj7;
              }
            }
          } else {
            if (1 === tmp7) {
              c6 = 0;
              const intl = closure_0(1115).intl;
              closure_0(4453).presentError(intl.string(closure_0(1115).t.R0RpRX));
              const obj2 = closure_0(4453);
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 !== 2) {
              updateRoleIcon(closure_2, value, null);
              c6 = 0;
            }
            c6 = 0;
            c8 = 3;
            const obj = { value, done: true };
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
    obj2.onPressEmoji = function onPressEmoji(arg0) {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    const result = guildId(11386).openEmojiPickerActionSheet(obj2, "stack");
  };
  items3[1] = closure_7(TableRow.TableRow, obj5);
  let tmp5Result = null;
  if (stateFromStores) {
    let obj6 = { variant: "danger", label: null, onPress: null };
    const intl6 = util.intl;
    obj6.label = intl6.string(util.t["uY+Nk/"]);
    obj6.onPress = function handleRemoveIcon() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      GuildSettingsRolesActionCreators.updateRoleIcon(roleId, null, null);
    };
    tmp5Result = closure_7(TableRow.TableRow, obj6);
  }
  let obj7 = { children: null };
  items3[2] = tmp5Result;
  items2[2] = closure_8(TableRowGroup.TableRowGroup, { hasIcons: false, children: items3 });
  obj7.children = items2;
  return closure_8(ActionSheet.ActionSheet, obj7);
};