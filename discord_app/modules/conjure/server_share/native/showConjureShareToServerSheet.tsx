// discord_app/modules/conjure/server_share/native/showConjureShareToServerSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import TableRadioRow from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConjureProjectStore from "../../projects/ConjureProjectStore.tsx";

require = fn;
function AddToAnotherServerSheet(projectId) {
  projectId = projectId.projectId;
  dependencyMap = undefined;
  guild = undefined;
  let sharing;
  closure_5 = async function _confirm() {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            dependencyMap = 1;
            c3 = 1;
            const obj5 = { value: dependencyMap.share(), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          if (value.shared) {
            let name;
            tmp4(5037).hideActionSheet(ConjureShareToServerSheet);
            const obj = tmp4(5037);
            const intl = server(1113).intl;
            const obj7 = { app: closure_129_1, server: null };
            if (closure_129_3 != null) {
              name = closure_129_3.name;
            }
            server = name;
            if (name == null) {
              server = "";
            }
            const obj8 = { text: null, variant: "success" };
            obj7.server = server;
            obj8.text = intl.formatToPlainString(tmp4(4121)["4WtS+v"], obj7);
            tmp4(5505).open(ConjureShareToServerSheet, obj8);
            const obj2 = tmp4(5505);
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp17) {
        c3 = tmp;
        throw tmp17;
      }
    }
  };
  const tmp = closure_9();
  items = [closure_5];
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
  const tmp6 = str(18414)(projectId, projectId.guildId, null, true);
  dependencyMap = tmp6;
  ({ guilds, guild } = tmp6);
  sharing = tmp6.sharing;
  const error = tmp6.error;
  let obj2 = { header: null, children: null };
  let obj3 = { title: null };
  let intl = tmp2(1113).intl;
  obj3.title = intl.formatToPlainString(str(4121)["Aet9+Z"], { app: str });
  obj2.header = closure_6(projectId(7426).BottomSheetTitleHeader, obj3);
  let obj4 = { style: tmp.content, children: null };
  let tmp7Result = null;
  if (null != guild) {
    let obj5 = { title: null, hasIcons: false, value: null, onChange: null, children: null };
    const intl2 = tmp2(1113).intl;
    obj5.title = intl2.string(tmp5(4121).Uq5hU9);
    obj5.value = guild.id;
    obj5.onChange = tmp6.pickGuild;
    obj5.children = guilds.map((id) =>
      timestampProducer(TableRadioRow.TableRadioRow, { value: id.id, label: id.name, disabled: sharing }, id.id),
    );
    tmp7Result = closure_6(tmp2(7258).TableRadioGroup, obj5);
  }
  const items2 = [tmp7Result, , , , ,];
  let obj = projectId(504);
  const tmp9 = sharing;
  const tmp5Result = str(18422);
  let tmp12 = stateFromStores;
  if (stateFromStores == null) {
    tmp12 = null;
  }
  const tmp2Result = projectId(18423);
  items2[1] = closure_6(tmp5Result, { rows: projectId(18423).conjureAddToAnotherServerRows(tmp12) });
  let obj7 = { variant: "body-sm/normal", color: "text-muted", children: null };
  const intl3 = tmp2(1113).intl;
  obj7.children = intl3.string(str(4121).Ewprwt);
  items2[2] = closure_6(projectId(5414).Text, obj7);
  let tmp7Result2 = null;
  if (null != error) {
    let obj8 = {
      variant: "body-sm/medium",
      color: "text-feedback-critical",
      accessibilityRole: "alert",
      children: error,
    };
    tmp7Result2 = closure_6(tmp2(5414).Text, obj8);
  }
  items2[3] = tmp7Result2;
  const obj9 = { variant: "primary", text: null, loading: null, disabled: null, onPress: null };
  const intl4 = tmp2(1113).intl;
  obj9.text = intl4.string(str(4121)["+uQwxA"]);
  obj9.loading = sharing;
  obj9.disabled = null == guild;
  obj9.onPress = function confirm() {
    const self = this;
    const apply = closure_5.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  items2[4] = closure_6(projectId(5421).Button, obj9);
  const obj10 = { variant: "secondary", text: null, disabled: null, onPress: null };
  const intl5 = tmp2(1113).intl;
  obj10.text = intl5.string(projectId(1113).t["ETE/oC"]);
  obj10.disabled = sharing;
  obj10.onPress = function onPress() {
    return str(closure_2[9]).hideActionSheet(ConjureShareToServerSheet);
  };
  items2[5] = closure_6(projectId(5421).Button, obj10);
  obj4.children = items2;
  obj2.children = closure_7(tmp9, obj4);
  return closure_6(projectId(7464).ActionSheet, obj2);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const ConjureShareToServerSheet = "ConjureShareToServerSheet";
const createStyles = fn(4823);
let obj2 = { content: { gap: nativeDefault.space.PX_16 } };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/server_share/native/showConjureShareToServerSheet.tsx");

export default function showConjureShareToServerSheet(arg0) {
  const obj2 = { key: ConjureShareToServerSheet, content: null };
  const merged = Object.assign(arg0);
  obj2.content = timestampProducer(AddToAnotherServerSheet, {});
  ActionSheetActionCreators.showActionSheet(obj2);
}
