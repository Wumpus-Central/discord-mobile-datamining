// === Module 16566: ConjureRemix ===

// Module 16566 (ConjureRemix)
import ConjureTypes from "ConjureTypes" /* 6747 */;
import ConjureActionCreators from "ConjureActionCreators" /* 8700 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 12904 */;
import size from "module_2" /* 2 */;

let closure_2, status;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj = function _remixConjureProjectInto() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    const user = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let conjureCreateFlags;
      let deleteProjectResult;
      let intl;
      let name;
      let obj15;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let Cn8H0Y;
          let projectId;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              status = tmp;
              closure_2 = tmp4;
              Cn8H0Y = undefined;
              projectId = null;
              c5 = 1;
              const obj4 = { name: "" + name.slice(0, 120) + closure_2_8, guild_id: projectId, install_scope: user.install_scope, flags: conjureCreateFlags(obj15.projectUsesNativeAppChannels(user)) };
              name = user.name;
              const createProject = ConjureActionCreators.createProject;
              const _HermesInternal = HermesInternal;
              ConjureActionCreators;
              conjureCreateFlags = ConjureTypes.conjureCreateFlags;
              ConjureTypes;
              c6 = 2;
              c7 = 1;
              obj15 = ConjureTypes;
              const obj5 = { value: createProject(obj4), done: false };
              return obj5;
            }
          } else {
            if (1 === c6) {
              c5 = 0;
              status = closure_4;
              if (null != projectId) {
                c6 = 4;
                c7 = 1;
                const obj8 = closure_131_0(closure_131_2[2]);
                const obj6 = {
                  value: deleteProjectResult.catch(() => {

                            }),
                  done: false
                };
                deleteProjectResult = obj8.deleteProject(projectId);
                return obj6;
              }
            } else if (2 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                c7 = 3;
                return { value, done: true };
              } else {
                projectId = value;
                c6 = 3;
                c7 = 1;
                const obj9 = { value: closure_131_6(user.id, projectId), done: false };
                return obj9;
              }
            } else if (3 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                c7 = 3;
                return { value, done: true };
              } else {
                c5 = 0;
                closure_131_5(projectId);
                const intl2 = closure_131_0(closure_131_2[5]).intl;
                closure_131_7(projectId, intl2.string(closure_131_1(closure_131_2[4]).jviD6Y), undefined, { remix: true });
                c7 = 3;
                return { value: { ok: true, projectId }, done: true };
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            }
            if (status instanceof closure_131_4) {
              if (409 === status.status) {
                Cn8H0Y = closure_131_1(closure_131_2[4]).kQerlZ;
              }
              const obj13 = { ok: false, message: intl.string(Cn8H0Y) };
              intl = closure_131_0(closure_131_2[5]).intl;
              c7 = 3;
              return { value: obj13, done: true };
            }
            Cn8H0Y = closure_131_1(closure_131_2[4]).Cn8H0Y;
          }
        } catch (tmp36) {
          closure_4 = tmp36;
          if (0 === c5) {
            c7 = 3;
            throw tmp36;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
({ ConjureRemixError: closure_4, ensureConnection: hasOwnProperty, remixProjectWorkspace: metroRequire, sendUserMessage: metroImportDefault } = ConjureConnectionStore);
let c8 = " (Remix)";
const result = size.fileFinishedImporting("modules/conjure/remix/ConjureRemix.tsx");

export const remixConjureProjectInto = function remixConjureProjectInto() {
  return obj(...arguments);
};