// discord_app/modules/user_profile/native/UserProfileAddTagActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import TableCheckboxRow from "../../../design/components/TableRow/native/TableCheckboxRow.native.tsx";
import TableRowGroup from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import UserProfileGameWidgetTypes from "../UserProfileGameWidgetTypes.tsx";
import UserProfileGameWidgetConstants from "../UserProfileGameWidgetConstants.native.tsx";
import UserProfileGameWidgetTagMetadata from "../UserProfileGameWidgetTagMetadata.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

require = fn;
function RadioTagSection(section) {
  section = section.section;
  ({ currentTags: importDefault, onTagsChange: dependencyMap } = section);
  const tags = section.tags;
  let found = tags.find((item) => importDefault.includes(item));
  if (found == null) {
    found = none;
  }
  let obj = {
    title: section.getLabel(),
    accessibilityLabel: section.getLabel(),
    hasIcons: false,
    value: found,
    onChange: function handleChange(arg0) {
      if (arg0 === none) {
        let result = UserProfileGameWidgetTagMetadata.clearWidgetGameTagSection(importDefault, section.tags);
      } else {
        result = UserProfileGameWidgetTagMetadata.toggleWidgetGameTag(importDefault, arg0);
      }
      dependencyMap(result);
    },
    children: null,
  };
  let obj2 = { label: null, value: null };
  const intl = section(1113).intl;
  obj2.label = intl.string(section(1113).t.PoWNfe);
  obj2.value = none;
  items = [closure_6(section(7127).TableRadioRow, obj2)];
  const tags1 = section.tags;
  items[1] = tags1.map((value) => {
    const widgetGameTagMetadata = section(dependencyMap[10]).getWidgetGameTagMetadata(value);
    let tmp3 = null;
    if (null != widgetGameTagMetadata) {
      const obj2 = { label: widgetGameTagMetadata.getText(), value };
      tmp3 = closure_1_6(section(dependencyMap[8]).TableRadioRow, obj2, value);
    }
    return tmp3;
  });
  obj.children = items;
  return closure_7(section(7124).TableRadioGroup, obj);
}
function CheckboxTagSection(arg0) {
  ({ section, currentTags: require, onTagsChange: importDefault } = arg0);
  const obj = { title: section.getLabel(), hasIcons: false, children: null };
  const tags = section.tags;
  obj.children = tags.map((item) => {
    closure_0 = item;
    const widgetGameTagMetadata = UserProfileGameWidgetConstants.getWidgetGameTagMetadata(item);
    let tmp3 = null;
    if (null != widgetGameTagMetadata) {
      const obj2 = {
        label: widgetGameTagMetadata.getText(),
        checked: closure_0.includes(item),
        onPress() {
          return importDefault(UserProfileGameWidgetTagMetadata.toggleWidgetGameTag(closure_2_0, closure_0));
        },
      };
      tmp3 = closure_1_6(TableCheckboxRow.TableCheckboxRow, obj2, item);
    }
    return tmp3;
  });
  return closure_6(TableRowGroup.TableRowGroup, obj);
}
let closure_5 = fn(8825).TrackUserProfileEditActions;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const none = "none";
let closure_9 = [];
const createStyles = fn(5140);
let obj2 = { content: { paddingHorizontal: nativeDefault.space.PX_16 } };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileAddTagActionSheet.tsx");

export default function UserProfileAddTagActionSheet(widgetType) {
  widgetType = widgetType.widgetType;
  const gameId = widgetType.gameId;
  let stateFromStores;
  let memo;
  const tmp = closure_10();
  items = [memo];
  stateFromStores = widgetType(stateFromStores[14]).useStateFromStores(items, () => memo.getId());
  const tmp3 = gameId(stateFromStores[15])(stateFromStores);
  noop = tmp3;
  const items1 = [tmp3, widgetType, gameId];
  memo = noop.useMemo(() => {
    const found = closure_3.filter(UserProfileGameWidgetTypes.isGameWidget);
    const found1 = found.find((type) => type.type === widgetEdited);
    let tags;
    if (found1 != null) {
      const games = found1.games;
      const found2 = games.find((gameId) => gameId.gameId === gameId);
      if (found2 != null) {
        tags = found2.tags;
      }
    }
    if (tags == null) {
      tags = closure_9;
    }
    return tags;
  }, items1);
  const effect = noop.useEffect(() => gameId(stateFromStores[17]), []);
  const items2 = [memo, widgetType, gameId, stateFromStores];
  const onTagsChange = noop.useCallback((arr) => {
    widgetEdited = arr;
    const someResult = arr.some((item) => !memo.includes(item));
    let trackUserProfileEditAction = closure_5;
    const result = widgetType(stateFromStores[18]).updatePendingGameTags(widgetEdited, gameId, arr);
    const obj = widgetType(stateFromStores[18]);
    const tmp2 = someResult ? trackUserProfileEditAction.TAG_ADDED : trackUserProfileEditAction.TAG_REMOVED;
    trackUserProfileEditAction = widgetType(stateFromStores[19]).trackUserProfileEditAction;
    const result1 = trackUserProfileEditAction({ userId: stateFromStores, action: tmp2, widgetEdited, gameId });
  }, items2);
  let obj2 = { scrollable: true, header: null, children: null };
  const obj3 = { title: null };
  const intl = widgetType(stateFromStores[9]).intl;
  obj3.title = intl.string(widgetType(stateFromStores[9]).t.Vw1YJS);
  obj2.header = closure_6(widgetType(stateFromStores[21]).BottomSheetTitleHeader, obj3);
  const obj4 = { style: tmp.content, contentContainerStyle: null, children: null };
  let obj = widgetType(stateFromStores[14]);
  obj4.contentContainerStyle = {
    paddingBottom: gameId(stateFromStores[5]).space.PX_16 + gameId(stateFromStores[13])().insets.bottom,
  };
  const obj6 = { spacing: gameId(stateFromStores[5]).space.PX_24, children: null };
  const entries = Object.entries(widgetType(stateFromStores[7]).WIDGET_GAME_TAG_SECTION_METADATA);
  obj6.children = entries.map((item) => {
    [tmp, tmp2] = item;
    if (tmp2.type === UserProfileGameWidgetTagMetadata.WidgetGameTagSectionType.RADIO) {
      const obj2 = { section: tmp2, currentTags: memo, onTagsChange };
      let tmp7 = timestampProducer(RadioTagSection, obj2, tmp);
    } else {
      const obj = { section: tmp2, currentTags: memo, onTagsChange };
      tmp7 = timestampProducer(CheckboxTagSection, obj, tmp);
    }
    return tmp7;
  });
  obj4.children = closure_6(widgetType(stateFromStores[23]).Stack, obj6);
  obj2.children = closure_6(widgetType(stateFromStores[22]).BottomSheetScrollView, obj4);
  return closure_6(widgetType(stateFromStores[20]).BottomSheet, obj2);
}
