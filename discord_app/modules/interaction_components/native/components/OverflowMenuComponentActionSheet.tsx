// discord_app/modules/interaction_components/native/components/OverflowMenuComponentActionSheet.tsx
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import ComponentStateContext from "../../ComponentStateContext.tsx";
import renderComponents from "../renderComponents.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function OverflowMenuSheetContent(component) {
  component = component.component;
  let obj = component(6395);
  const overflowMenuComponentActionSheetKey = obj.getOverflowMenuComponentActionSheetKey(
    component(8824).useComponentContainerId(),
    component.id,
  );
  const groups = component.groups;
  dependencyMap = groups.some((components) => {
    components = components.components;
    return components.some((emoji) => null != emoji.emoji);
  });
  items = [overflowMenuComponentActionSheetKey];
  const items1 = [component];
  const callback = noop.useCallback((loading) => {
    if (!loading.loading) {
      ActionSheetActionCreatorsDefault.hideActionSheet(overflowMenuComponentActionSheetKey);
    }
  }, items);
  const memo = noop.useMemo(() => {
    items = [component];
    return items;
  }, items1);
  const obj2 = component(8824);
  const isComponentTreeLoading = component(12413).useIsComponentTreeLoading(memo, callback);
  const obj4 = { children: null };
  const groups1 = component.groups;
  obj4.children = groups1.map((label, index) => {
    const obj = { title: label.label, hasIcons, children: null };
    const components = label.components;
    obj.children = renderComponents.renderComponents(
      components.filter((type) => type.type === component(hasIcons[9]).ComponentType.MENU_ACTION_ITEM),
    );
    return jsx(TableRowGroup.TableRowGroup, { title: label.label, hasIcons, children: null }, index);
  });
  return jsx(component(7546).ActionSheet, { children: null });
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/interaction_components/native/components/OverflowMenuComponentActionSheet.tsx",
);

export default function OverflowMenuComponentActionSheet(arg0) {
  ({ component, containerProps } = arg0);
  const obj = {};
  const merged = Object.assign(containerProps);
  obj.children = <OverflowMenuSheetContent component={component} />;
  return jsx(ComponentStateContext.ComponentStateContextProvider, {});
}
