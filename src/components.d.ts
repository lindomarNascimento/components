/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ThemeProps, ThemeTypesProps } from "./components/button/button";
export { ThemeProps, ThemeTypesProps } from "./components/button/button";
export namespace Components {
    interface DsButton {
        "label": string;
        "status": ThemeTypesProps;
        "styles": { [key: string]: string };
        "theme": ThemeProps;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLDsButtonElement extends Components.DsButton, HTMLStencilElement {
    }
    var HTMLDsButtonElement: {
        prototype: HTMLDsButtonElement;
        new (): HTMLDsButtonElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "ds-button": HTMLDsButtonElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface DsButton {
        "label"?: string;
        "status"?: ThemeTypesProps;
        "styles"?: { [key: string]: string };
        "theme"?: ThemeProps;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "ds-button": DsButton;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ds-button": LocalJSX.DsButton & JSXBase.HTMLAttributes<HTMLDsButtonElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
