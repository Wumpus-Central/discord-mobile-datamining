// discord_app/modules/conjure/share/native/conjureProjectLinkCard.tsx
import UserUtils from "../../../../utils/UserUtils.tsx";
import ConjureMobileExperiment from "../../experiments/ConjureMobileExperiment.tsx";
import conjureSharedProjectCoverTargetDefault from "../conjureSharedProjectCoverTarget.tsx";
import ApplicationStore from "../../../applications/ApplicationStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import ConjureProjectStore from "../../projects/ConjureProjectStore.tsx";
import ConjureSharedProjectStore from "../ConjureSharedProjectStore.tsx";

require = fn;
function readConjureProjectLinkCard(applicationId, ticket, memo2) {
  const status = ConjureSharedProjectStore.getStatus(applicationId, ticket);
  if (null != status) {
    if ("loading" !== status.type) {
      if ("unavailable" !== status.type) {
        if ("no_access" !== status.type) {
          if ("expired" !== status.type) {
            const application = ApplicationStore.getApplication(applicationId);
            if (null == application) {
              return null;
            } else if ("info_only" === status.type) {
              const obj3 = { type: "info_only", application };
              return obj3;
            } else {
              const project = ConjureProjectStore.getProject(status.projectId);
              if (null == project) {
                return null;
              } else {
                const owner_user_id = project.owner_user_id;
                const user = UserStore.getUser(owner_user_id);
                const obj4 = {
                  type: "ready",
                  application,
                  ownerId: owner_user_id,
                  creatorName: null,
                  canRemix: null,
                  coverAction: null,
                };
                let name = null;
                if (null != user) {
                  name = UserUtils.getName(user);
                }
                obj4.creatorName = name;
                let ticketValid = status.ticketValid;
                if (!ticketValid) {
                  ticketValid = canRemixProject(project);
                }
                if (ticketValid) {
                  ticketValid = ConjureMobileExperiment.isConjureMobileEnabled("ConjureProjectLinkCard");
                }
                obj4.canRemix = ticketValid;
                const tmp11 = conjureSharedProjectCoverTargetDefault(applicationId, project, memo2);
                let type;
                if (tmp11 != null) {
                  type = tmp11.type;
                }
                if (type == null) {
                  type = null;
                }
                obj4.coverAction = type;
                return obj4;
              }
            }
          }
        }
        const obj5 = { type: status.type };
        return obj5;
      }
    }
  }
  return null;
}
const canRemixProject = fn(7017).canRemixProject;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/share/native/conjureProjectLinkCard.tsx");

export { readConjureProjectLinkCard };
export function conjureProjectLinkCardKey(applicationId, ticket, memo2) {
  const tmp = readConjureProjectLinkCard(applicationId, ticket, memo2);
  if (null != tmp) {
    if ("no_access" !== tmp.type) {
      if ("expired" !== tmp.type) {
        items = [tmp.type, , , ,];
        ({ name: arr2[1], description: arr2[2], icon: arr2[3], coverImage: arr2[4] } = tmp.application);
        let obj = items;
        if ("ready" === tmp.type) {
          const items1 = [, ,];
          const arraySpreadResult = HermesBuiltin.arraySpread(items, 0);
          items1[arraySpreadResult] = tmp.creatorName;
          const sum = arraySpreadResult + 1;
          ({ canRemix: arr[tmp5], coverAction: arr[tmp5 + 1] } = tmp);
          obj = items1;
        }
        return obj.join("\0");
      }
    }
  }
  let str2;
  if (tmp != null) {
    str2 = tmp.type;
  }
  if (str2 == null) {
    str2 = "";
  }
  return str2;
}
