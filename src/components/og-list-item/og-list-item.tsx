/**
 * ORGENIC-UI
 * @license MIT
 * See LICENSE file at https://github.com/orgenic/orgenic-ui/blob/master/LICENSE
 **/

import { Component, Prop/*, EventEmitter, Event */ } from "@stencil/core";

@Component({
    tag: "og-list-item",
    styleUrl: "og-list-item.scss",
    shadow: true
})
export class OgListItem {

    /**
     * The value is needed for the using @see OgList instance to correctly handle selection.
     *
     * @type {*}
     * @memberof OgListItem
     */
    @Prop() key: any;

    /**
     * Sets the value of the label.
     * @type {string}
     * @memberof OgListItem
     */
    @Prop() label: string;

    /**
     * Set flag, if place for an image is reserved, wheather used or not.
     *
     * @type {boolean}
     * @memberof OgListItem
     */
    @Prop() showImage: boolean;

    /**
     * Set the url of the image to be shown in the placeholder
     *
     * @type {string}
     * @memberof OgListItem
     */
    @Prop() image: string;

    /**
     * Set flag, if place for a value bage is reserved wheather used or not
     *
     * @type {boolean}
     * @memberof OgListItem
     */
    @Prop() showValue: boolean;

    /**
     * Set the value to be shown in the badge placeholder
     *
     * @type {string}
     * @memberof OgListItem
     */
    @Prop() value: string;

    /**
     * Set the flag, if this list item is in selected state.
     *
     * @type {boolean}
     * @memberof OgListItem
     */
    @Prop() isSelected: boolean;

    /**
     * Set the flag, it this list item is in disabled state.
     *
     * @type {boolean}
     * @memberof OgListItem
     */
    @Prop() isDisabled: boolean;

    render(): any {
        return <li class={"og-list-item" + (this.isDisabled ? " og-list-item--disabled" : "")}>
            <div class={"og-list-item__content" + (this.isSelected ? " og-list-item__content--selected" : "")}>
                {
                    this.showImage && <div class="og-list-item__icon">
                        {this.image && <img src={this.image} />}
                    </div>
                }
                <div class="og-list-item__label">{this.label}</div>
                {
                    this.showValue && this.value
                    && <div class="og-list-item__value">{this.value}</div>
                }
            </div>
        </li>;
    }
}
