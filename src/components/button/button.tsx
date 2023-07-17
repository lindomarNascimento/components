import { Component, Prop, h, Element, Host } from '@stencil/core';

const getElementAttributes = (nodeMap: NamedNodeMap) => {
  if (nodeMap) {
    const length = nodeMap.length;
    console.log('namedNodeMap: ', nodeMap);
    return Object.keys(nodeMap).reduce((props, current) => {
      try {
        const numCurrent = parseInt(current);
        if (numCurrent < length) {
          const property = nodeMap[current];
          return {
            ...props,
            [property.name]: property.value,
          };
        }
      } catch (err) {}
    }, {});
  }
  return {};
};

export type ThemeTypesProps = 'primary' | 'outline' | 'disable' | 'disable-outline';

export type ThemeProps = 'light' | 'dark' | 'trader';

@Component({
  tag: 'ds-button',
  styleUrl: 'button.scss',
})
export class Button {
  @Prop() label: string;
  @Prop() theme: ThemeProps = 'light';
  @Prop() status: ThemeTypesProps = 'primary';
  @Prop() styles: { [key: string]: string };
  @Element() el: HTMLButtonElement;

  clickEffeect(event) {
    alert('entrei');
    const circle = document.querySelector('.circle');
    const circle2 = document.querySelector('.circle2');
    const x = event.layerX;
    const y = event.layerY;

    circle.classList.add('animation');
    circle2.classList.add('animation');

    setTimeout(() => {
      circle2.classList.remove('animation');
      circle.classList.remove('animation');
    }, 600);

    circle.setAttribute(
      'style',
      `
      left: ${x}px;
      top: ${y}px;
    `,
    );
    circle2.setAttribute(
      'style',
      `
      left: ${x}px;
      top: ${y}px;
    `,
    );
  }

  render() {
    const properties = getElementAttributes(this.el.attributes);
    return (
      <Host>
        <button class={`b3-button ${this.theme} ${this.status}`} {...properties} onClick={() => this.clickEffeect}>
          <div class="circle"></div>
          <div class="circle2"></div>
          {this.label}
          <slot></slot>
        </button>
      </Host>
    );
  }
}
