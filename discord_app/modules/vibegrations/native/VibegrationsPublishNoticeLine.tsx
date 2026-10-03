// discord_app/modules/vibegrations/native/VibegrationsPublishNoticeLine.tsx
import c from "../../../../_runtime/00576_c.js";
import useVibegrationsPublishAction from "../lib/useVibegrationsPublishAction.tsx";
import vibegrationsReminderSlot from "../lib/vibegrationsReminderSlot.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const useVibegrationsPublishActionDefault = useVibegrationsPublishAction;

const _modDef3723 = tmp3(3723);
require = fn;
const jsx = fn(21).jsx;
fn(558);
let ReactCompilerGating = fn(558);
let closure_5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (projectId) => {
      const cResult = projectId(576).c(9);
      projectId = projectId.projectId;
      const notice = projectId.notice;
      const context = noop.useContext(projectId(16608).VibegrationsPublishActionContext);
      const tmp5 = context(16691)(projectId);
      if (cResult[0] === context) {
        if (cResult[1] === projectId) {
          let tmp6 = cResult[2];
        }
        if (cResult[3] === tmp6) {
          if (cResult[4] === tmp5) {
            if (cResult[5] === notice) {
              let tmp7 = cResult[6];
            }
            if (cResult[7] !== tmp7) {
              const obj2 = { variant: "text-md/normal", color: "text-default", children: tmp7 };
              const tmp11 = jsx(tmp(4886).Text, { variant: "text-md/normal", color: "text-default", children: tmp7 });
              cResult[7] = tmp7;
              cResult[8] = tmp11;
              let tmp9 = tmp11;
            } else {
              tmp9 = cResult[8];
            }
            return tmp9;
          }
        }
        const intl = tmp(1126).intl;
        const obj3 = { name: tmp5, onOpen: tmp6 };
        const formatResult = intl.format(tmp(16692).publishNoticeMessage(notice), obj3);
        cResult[3] = tmp6;
        cResult[4] = tmp5;
        cResult[5] = notice;
        cResult[6] = formatResult;
        tmp7 = formatResult;
        const tmpResult = tmp(16692);
      }
      const fn = function c() {
        if (null != context) {
          const result = useVibegrationsPublishAction.openVibegrationsPublishedApp(projectId, tmp);
        }
      };
      cResult[0] = context;
      cResult[1] = projectId;
      cResult[2] = fn;
      tmp6 = fn;
      let obj = projectId(576);
    }
  : (projectId) => {
      projectId = projectId.projectId;
      const context = noop.useContext(projectId(16608).VibegrationsPublishActionContext);
      const items = [context, projectId];
      const callback = noop.useCallback(() => {
        if (null != context) {
          const result = useVibegrationsPublishAction.openVibegrationsPublishedApp(projectId, tmp);
        }
      }, items);
      let obj = { variant: "text-md/normal", color: "text-default", children: null };
      const intl = projectId(1126).intl;
      const tmp2 = context(16691)(projectId);
      obj.children = intl.format(projectId(16692).publishNoticeMessage(projectId.notice), {
        name: tmp2,
        onOpen: callback,
      });
      return jsx(projectId(4886).Text, { variant: "text-md/normal", color: "text-default", children: null });
    };
ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (projectId) => {
      let Text = projectId;
      let tmp = dependencyMap;
      const cResult = projectId(576).c(5);
      projectId = projectId.projectId;
      const tmp4 = useVibegrationsPublishActionDefault(projectId);
      importDefault = tmp4;
      if (null == tmp4) {
        return null;
      } else {
        if (cResult[0] === projectId) {
          if (cResult[1] === tmp4) {
            let tmp5 = cResult[2];
          }
          if (cResult[3] !== tmp5) {
            Text = Text(4886).Text;
            const obj2 = { variant: "text-xs/normal", color: "text-muted", children: tmp5 };
            tmp = (
              <Text variant="text-xs/normal" color="text-muted">
                {tmp5}
              </Text>
            );
            cResult[3] = tmp5;
            cResult[4] = tmp;
          }
        }
        const intl = Text(1126).intl;
        const obj3 = {
          action: tmp4.label,
          onUpdate() {
            const result = vibegrationsReminderSlot.markVibegrationsReminderActivity(projectId);
            closure_1.run("outdated_notice");
          },
        };
        const formatResult = intl.format(_modDef3723.AcWS6c, obj3);
        cResult[0] = projectId;
        cResult[1] = tmp4;
        cResult[2] = formatResult;
        tmp5 = formatResult;
      }
      const obj = projectId(576);
    }
  : (projectId) => {
      projectId = projectId.projectId;
      const tmp3 = useVibegrationsPublishActionDefault(projectId);
      importDefault = tmp3;
      let tmp4 = null;
      if (null != tmp3) {
        const obj = { variant: "text-xs/normal", color: "text-muted", children: null };
        const intl = projectId(1126).intl;
        const obj2 = {
          action: tmp3.label,
          onUpdate() {
            const result = vibegrationsReminderSlot.markVibegrationsReminderActivity(projectId);
            closure_1.run("outdated_notice");
          },
        };
        obj.children = intl.format(_modDef3723.AcWS6c, obj2);
        tmp4 = jsx(projectId(4886).Text, { variant: "text-xs/normal", color: "text-muted", children: null });
      }
      return tmp4;
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsPublishNoticeLine.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(3);
      ({ projectId, notice } = arg0);
      if (cResult[0] === notice) {
        if (cResult[1] === projectId) {
          return cResult[2];
        }
      }
      if ("outdated" === notice) {
        const obj2 = { projectId };
        let tmp4 = <closure_6 projectId={projectId} />;
      } else {
        const obj3 = { projectId, notice };
        tmp4 = <closure_5 projectId={projectId} notice={notice} />;
      }
      cResult[0] = notice;
      cResult[1] = projectId;
      cResult[2] = tmp4;
    }
  : (arg0) => {
      ({ projectId, notice } = arg0);
      if ("outdated" === notice) {
        const obj2 = { projectId };
        let tmp3 = <closure_6 projectId={projectId} />;
      } else {
        const obj = { projectId, notice };
        tmp3 = <closure_5 projectId={projectId} notice={notice} />;
      }
      return tmp3;
    };
