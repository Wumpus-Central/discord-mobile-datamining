// discord_app/modules/conjure/server_share/native/showConjureShareToServerSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import TableRadioRow from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConjureProjectStore from "../../projects/ConjureProjectStore.tsx";

require = fn;
function ShareToServerSheet(projectId) {
  projectId = projectId.projectId;
  ({ guildId, publishOptions, addingToAnother } = projectId);
  if (addingToAnother === undefined) {
    addingToAnother = false;
  }
  dependencyMap = undefined;
  guild = undefined;
  let sharing;
  closure_5 = undefined;
  closure_6 = async function _confirm() {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            dependencyMap = tmp5;
            closure_129_0 = undefined;
            c3 = 1;
            c4 = 1;
            const obj5 = { value: dependencyMap.share(), done: false };
            return obj5;
          }
        } else {
          if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_129_0 = value;
              let shared = closure_129_0.shared;
              if (shared) {
                shared = !closure_130_5.current;
              }
              if (shared) {
                tmp2(5552).hideActionSheet(ConjureShareToServerSheet);
                if ("publish" === closure_129_0.next) {
                  c3 = 2;
                  c4 = 1;
                  const obj7 = { value: closure_130_2.publish(), done: false };
                  return obj7;
                } else {
                  const intl = server(1113).intl;
                  if ("added" === closure_129_0.next) {
                    let o2xHEb = tmp2(4131)["4WtS+v"];
                  } else {
                    o2xHEb = tmp2(4131).o2xHEb;
                  }
                  const obj8 = { app: closure_130_1, server: null };
                  let name;
                  if (closure_130_3 != null) {
                    name = closure_130_3.name;
                  }
                  server = name;
                  if (name == null) {
                    server = "";
                  }
                  const obj9 = { text: null, variant: "success" };
                  obj8.server = server;
                  obj9.text = intl.formatToPlainString(o2xHEb, obj8);
                  tmp2(6015).open(ConjureShareToServerSheet, obj9);
                  const obj10 = tmp2(6015);
                }
                const obj2 = tmp2(5552);
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c4 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp30) {
        c4 = tmp;
        throw tmp30;
      }
    }
  };
  const tmp = closure_10();
  items = [closure_6];
  const items1 = [projectId];
  const stateFromStores = projectId(504).useStateFromStores(
    items,
    () => ConjureProjectStore.getProject(projectId),
    items1,
  );
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.name;
  }
  if (str == null) {
    str = "";
  }
  const tmp6 = str(13189)(projectId, guildId, publishOptions, addingToAnother);
  dependencyMap = tmp6;
  ({ guilds, guild } = tmp6);
  sharing = tmp6.sharing;
  const error = tmp6.error;
  let intl = tmp2(1113).intl;
  const tmp7 = str(4131);
  let obj = projectId(504);
  closure_5 = sharing.useRef(false);
  const effect = sharing.useEffect(() => {
    closure_5.current = false;
    return () => {
      closure_1_5.current = true;
    };
  }, []);
  let obj2 = {
    header: closure_7(projectId(7913).BottomSheetTitleHeader, {
      title: intl.formatToPlainString(addingToAnother ? tmp7["Aet9+Z"] : tmp7.N3Ryqz, { app: str }),
    }),
    children: null,
  };
  let obj3 = { style: tmp.content, children: null };
  let tmp10Result = null;
  if (null != guild) {
    if (addingToAnother) {
      let obj4 = { title: null, hasIcons: false, value: null, onChange: null, children: null };
      const intl2 = tmp2(1113).intl;
      obj4.title = intl2.string(tmp5(4131).Uq5hU9);
      obj4.value = guild.id;
      obj4.onChange = tmp6.pickGuild;
      obj4.children = guilds.map((id) =>
        metroImportDefault(TableRadioRow.TableRadioRow, { value: id.id, label: id.name, disabled: sharing }, id.id),
      );
      tmp10Result = closure_7(tmp2(7745).TableRadioGroup, obj4);
    } else {
      tmp10Result = null;
    }
  }
  const items2 = [tmp10Result, , , , ,];
  const formatToPlainStringResult = intl.formatToPlainString(addingToAnother ? tmp7["Aet9+Z"] : tmp7.N3Ryqz, {
    app: str,
  });
  const tmp12 = closure_5;
  const tmp2Result = projectId(13316);
  if (addingToAnother) {
    let result = tmp2Result.conjureAddToAnotherServerRows(stateFromStores);
  } else {
    result = tmp2Result.conjureShareRows(stateFromStores);
  }
  items2[1] = closure_7(str(13313), { rows: result });
  let tmp10Result3 = null;
  if (addingToAnother) {
    let obj5 = { variant: "body-sm/normal", color: "text-muted", children: null };
    const intl3 = tmp2(1113).intl;
    obj5.children = intl3.string(tmp5(4131).Ewprwt);
    tmp10Result3 = closure_7(tmp2(5929).Text, obj5);
  }
  items2[2] = tmp10Result3;
  let tmp10Result4 = null;
  if (null != error) {
    let obj6 = {
      variant: "body-sm/medium",
      color: "text-feedback-critical",
      accessibilityRole: "alert",
      children: error,
    };
    tmp10Result4 = closure_7(tmp2(5929).Text, obj6);
  }
  items2[3] = tmp10Result4;
  const intl4 = tmp2(1113).intl;
  const tmp5Result2 = str(4131);
  const tmp5Result = str(13313);
  items2[4] = closure_7(projectId(5936).Button, {
    variant: "primary",
    text: intl4.string(addingToAnother ? tmp5Result2["+uQwxA"] : tmp5Result2["+ysSG7"]),
    loading: sharing,
    disabled: null == guild,
    onPress: function confirm() {
      const self = this;
      const apply = closure_6.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
  });
  let obj8 = { variant: "secondary", text: null, disabled: null, onPress: null };
  const intl5 = tmp2(1113).intl;
  obj8.text = intl5.string(projectId(1113).t["ETE/oC"]);
  obj8.disabled = sharing;
  obj8.onPress = function onPress() {
    return str(closure_2[11]).hideActionSheet(ConjureShareToServerSheet);
  };
  items2[5] = closure_7(projectId(5936).Button, obj8);
  obj3.children = items2;
  obj2.children = closure_8(tmp12, obj3);
  return closure_7(projectId(7951).ActionSheet, obj2);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const ConjureShareToServerSheet = "ConjureShareToServerSheet";
const createStyles = fn(5306);
let obj2 = { content: { gap: nativeDefault.space.PX_16 } };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/server_share/native/showConjureShareToServerSheet.tsx");

export default function showConjureShareToServerSheet(arg0) {
  const obj2 = { key: ConjureShareToServerSheet, content: null };
  const merged = Object.assign(arg0);
  obj2.content = metroImportDefault(ShareToServerSheet, {});
  ActionSheetActionCreators.showActionSheet(obj2);
}
