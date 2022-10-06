export default function useRouter() {
  const push = (path: string) => {
    const state = history.state ? { page_id: history.state.page_id + 1 } : { page_id: 1 };
    const title = "";
    history.pushState(state, title, path);

    const popStateEvent = new PopStateEvent("popstate", { state });
    dispatchEvent(popStateEvent);
  };

  return { push };
}
