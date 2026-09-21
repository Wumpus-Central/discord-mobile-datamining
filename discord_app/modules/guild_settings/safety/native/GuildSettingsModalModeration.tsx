// discord_app/modules/guild_settings/safety/native/GuildSettingsModalModeration.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import TableRadioRow from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import NavScrim from "../../../../design/components/Navigator/native/NavScrim.android.tsx";
import TableSwitchRow from "../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import HeaderActionButton from "../../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import Form from "../../../../design/void/Form/native/index.tsx";
import useUserIsTeen from "../../../self_mod/hooks/useUserIsTeen.tsx";
import GuildSettingsActionCreatorsDefault from "../../GuildSettingsActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import GuildSettingsStore from "../../GuildSettingsStore.tsx";

require = fn;
function GuildSettingsOwnerConfiguredContentLevel(guild) {
  guild = guild.guild;
  let DEFAULT = guild.nsfwLevel;
  if (DEFAULT == null) {
    DEFAULT = constants4.DEFAULT;
  }
  let DEFAULT2 = guild.ownerConfiguredContentLevel;
  if (DEFAULT2 == null) {
    DEFAULT2 = constants4.DEFAULT;
  }
  let tmp7 = DEFAULT === constants4.AGE_RESTRICTED;
  const userIsTeen = useUserIsTeen.useUserIsTeen();
  if (tmp7) {
    tmp7 = DEFAULT2 !== constants4.AGE_RESTRICTED;
  }
  let tmp9 = null;
  if (!userIsTeen) {
    let obj2 = { title: null, hasIcons: false, description: null, children: null };
    const intl = util.intl;
    obj2.title = intl.string(util.t.YJlvBM);
    const intl2 = util.intl;
    const obj3 = { helpArticleLink: HelpdeskUtilsDefault.getArticleURL(constants2.NSFW_SERVER_AGE_RESTRICTION) };
    obj2.description = intl2.format(util.t.iyQQ62, obj3);
    const obj5 = { label: null, value: null, onValueChange: null, disabled: null };
    const intl3 = util.intl;
    obj5.label = intl3.string(util.t.N9xEJF);
    obj5.value = DEFAULT2 === constants4.AGE_RESTRICTED;
    obj5.onValueChange = tmp8;
    obj5.disabled = tmp7;
    obj2.children = closure_1_10(TableSwitchRow.TableSwitchRow, obj5);
    tmp9 = closure_1_10(TableRowGroup.TableRowGroup, obj2, "filter-section");
  }
  return tmp9;
}
const Constants = fn(1074);
({
  GuildFeatures: metroRequire,
  HelpdeskArticles: closure_7,
  Permissions: closure_8,
  GuildNSFWContentLevel: closure_9,
} = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { stack: { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING } };
let closure_13 = createStyles.createLegacyClassComponentStyles(obj2);
const PureComponent = noop.PureComponent;
class GuildSettingsModalModeration extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleSaveChanges = function handleSaveChanges() {
      const guild = applyArgumentsResult.props.guild;
      GuildSettingsActionCreatorsDefault.saveGuild(guild.id, {
        verificationLevel: guild.verificationLevel,
        explicitContentFilter: guild.explicitContentFilter,
        ownerConfiguredContentLevel: guild.ownerConfiguredContentLevel,
      });
    };
    return applyArgumentsResult;
  }
}
const prototype = GuildSettingsModalModeration.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  this.updateNavigation();
};
prototype["componentDidUpdate"] = function componentDidUpdate(arg0) {
  this.updateNavigation(arg0);
};
prototype["updateNavigation"] = function updateNavigation(submitting) {
  const self = this;
  ({ submitting, hasChanges, navigation } = this.props);
  if (!tmp) {
    let fn;
    if (submitting) {
      fn = () => null;
    }
    let setOptionsResult = { headerLeft: fn, headerRight: null };
    if (submitting) {
      let fn2 = () => closure_1_10(self(dependencyMap[14]).HeaderSubmittingIndicator, {});
    } else if (hasChanges) {
      fn2 = () => {
        const obj = { onPress: self.handleSaveChanges, text: null };
        const intl = util.intl;
        obj.text = intl.string(util.t["R3BPH+"]);
        return closure_2_10(HeaderActionButton.HeaderActionButton, obj);
      };
    }
    setOptionsResult.headerRight = fn2;
    setOptionsResult = navigation.setOptions(setOptionsResult);
  }
};
prototype["renderVerificationLevelSection"] = function renderVerificationLevelSection() {
  const self = this;
  const guild = this.props.guild;
  let obj = { hasIcons: false, title: null, description: null, value: null, onChange: null, children: null };
  const intl = self(1115).intl;
  obj.title = intl.string(self(1115).t.DpRdYK);
  const intl2 = self(1115).intl;
  obj.description = intl2.format(self(1115).t.iuRk2j, {});
  obj.value = guild.verificationLevel;
  obj.onChange = function onChange(verificationLevel) {
    return self.handleVerificationLevelChange(verificationLevel);
  };
  const features = guild.features;
  const verificationLevelOptions = self(15115).generateVerificationLevelOptions(features.has(constants.COMMUNITY));
  obj.children = verificationLevelOptions.map((item) => {
    ({ name, color, value } = item);
    ({ desc, disabled } = item);
    const obj = { value, label: null, subLabel: null, disabled: null };
    let tmpResult = name;
    if (null != color) {
      const obj2 = { variant: "text-md/semibold", style: null, children: null };
      const obj3 = { color };
      obj2.style = obj3;
      obj2.children = name;
      tmpResult = closure_2_10(Text_Text.Text, obj2);
    }
    obj.label = tmpResult;
    obj.subLabel = desc;
    const canManageGuild = self.props.canManageGuild;
    let tmp5 = !canManageGuild;
    if (canManageGuild) {
      tmp5 = disabled;
    }
    obj.disabled = tmp5;
    return closure_2_10(TableRadioRow.TableRadioRow, obj, "level-" + value);
  });
  return closure_10(self(5902).TableRadioGroup, obj, "level-section");
};
prototype["renderExplicitContentFilter"] = function renderExplicitContentFilter() {
  const self = this;
  const guild = this.props.guild;
  let obj = { hasIcons: false, title: null, description: null, value: null, onChange: null, children: null };
  const intl = self(1115).intl;
  obj.title = intl.string(self(1115).t.bPgfJz);
  const intl2 = self(1115).intl;
  const obj2 = { helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(constants2.SAFE_DIRECT_MESSAGING) };
  obj.description = intl2.format(self(1115).t.BI4ukC, obj2);
  obj.value = guild.explicitContentFilter;
  obj.onChange = function onChange(explicitContentFilter) {
    return self.handleExplicitContentFilterChange(explicitContentFilter);
  };
  const features = guild.features;
  const contentFilterOptions = self(15115).generateContentFilterOptions(features.has(constants.COMMUNITY));
  obj.children = contentFilterOptions.map((value) => {
    value = value.value;
    ({ name, desc, disabled } = value);
    const obj = { value, label: name, subLabel: desc, disabled: null };
    const canManageGuild = self.props.canManageGuild;
    let tmp2 = !canManageGuild;
    if (canManageGuild) {
      tmp2 = disabled;
    }
    obj.disabled = tmp2;
    return closure_2_10(TableRadioRow.TableRadioRow, obj, "filter-" + value);
  });
  return closure_10(self(5902).TableRadioGroup, obj, "filter-section");
};
prototype["render"] = function render() {
  const props = this.props;
  let canManageGuild = props.canManageGuild;
  ({ guild, hasChanges } = props);
  const obj = { contentContainerStyle: null, children: null };
  const items = [{ paddingTop: 16 }, this.props.contentContainerStyle];
  obj.contentContainerStyle = items;
  const obj2 = { style: closure_13(this.context).stack, spacing: nativeDefault.space.PX_24, children: null };
  const items1 = [this.renderVerificationLevelSection(), this.renderExplicitContentFilter()];
  if (canManageGuild) {
    const obj3 = { guild, hasChanges };
    canManageGuild = closure_1_10(GuildSettingsOwnerConfiguredContentLevel, obj3);
  }
  const obj4 = { children: null };
  items1[2] = canManageGuild;
  obj2.children = items1;
  obj.children = closure_1_11(Stack_Stack.Stack, obj2);
  const items2 = [closure_1_10(Form.Form, obj), closure_1_10(NavScrim.NavScrim, {})];
  obj4.children = items2;
  return closure_1_11(closure_1_12, obj4);
};
prototype["componentWillUnmount"] = function componentWillUnmount() {
  if (this.props.hasChanges) {
    GuildSettingsActionCreatorsDefault.cancelChanges(tmp.props.guild.id);
  }
};
prototype["handleVerificationLevelChange"] = function handleVerificationLevelChange(verificationLevel) {
  GuildSettingsActionCreatorsDefault.updateGuild({ verificationLevel });
};
prototype["handleExplicitContentFilterChange"] = function handleExplicitContentFilterChange(explicitContentFilter) {
  GuildSettingsActionCreatorsDefault.updateGuild({ explicitContentFilter });
};
GuildSettingsModalModeration.contextType = fn(4466).ThemeContext;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/safety/native/GuildSettingsModalModeration.tsx");

export default function ConnectedGuildSettingsModalModeration(contentContainerStyle) {
  let guild;
  const navigation = guild(1484).useNavigation();
  const obj = guild(1484);
  const items = [GuildSettingsStore];
  const stateFromStoresObject = guild(504).useStateFromStoresObject(items, () => {
    props = props.getProps();
    return { guild: props.guild, submitting: props.submitting, hasChanges: props.hasChanges };
  });
  guild = stateFromStoresObject.guild;
  ({ submitting, hasChanges } = stateFromStoresObject);
  guild(504);
  [][0] = PermissionStore;
  let tmp5 = null;
  if (null != guild) {
    const obj3 = {
      navigation,
      guild,
      submitting,
      hasChanges,
      canManageGuild: tmp4,
      contentContainerStyle: contentContainerStyle.contentContainerStyle,
    };
    tmp5 = closure_10(GuildSettingsModalModeration, obj3);
  }
  return tmp5;
}
