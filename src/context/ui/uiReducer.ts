import { UIState } from "./";

type UIActionType = { type: "[UI] - Set Active Section"; payload: string } | {
    type: "[UI] - Toggle Mobile Menu";
}

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
    switch (action.type) {
        case "[UI] - Set Active Section":
            return {
                ...state,
                activeSection: action.payload,
            };

        case "[UI] - Toggle Mobile Menu":
            return {
                ...state,
                isMobileMenuOpen: !state.isMobileMenuOpen,
            };
        default:
            return state;
    }
};
