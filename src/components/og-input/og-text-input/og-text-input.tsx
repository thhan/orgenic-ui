import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'og-text-input',
    styleUrl: 'og-text-input.scss',
    shadow: true
})
export class OgTextInput {
    /**
     * Optional placeholder text if input is empty.
     */
    @Prop() placeholder?: string;

    /**
     * The initial value. Can be updated at runtime.
     */
    @Prop({ mutable: true, reflectToAttr: true }) value: string;

    /**
     * Determines, whether the control is disabled or not.
     */
    @Prop() disabled: boolean;

    /**
     * Event is being emitted when value changes.
     */
    @Event() valueChanged: EventEmitter<string>;

    /**
     * Event is being emitted when value changes.
     */
    @Event() update: EventEmitter<string>;

    /**
     * Event is being emitted when input gets focus..
     */
    @Event() focusGained: EventEmitter<FocusEvent>;

    /**
     * Event is being emitted when focus gets lost.
     */
    @Event() focusLost: EventEmitter<FocusEvent>;

    handleChange(e) {
        this.value = e.target.value;
        this.valueChanged.emit(this.value);
        this.update.emit(this.value);
    }

    hostData() {
        return {
            class: {
                'og-form-item__editor': true
            }
        };
    }

    render() {
        return [
            <input type="text"
                class="og-input__input"
                value={ this.value }
                disabled={ this.disabled }
                onInput={ (event) => this.handleChange(event) }
                onFocus={ (event) => this.focusGained.emit(event) }
                onBlur={ (event) => this.focusLost.emit(event) }
                placeholder={ this.placeholder }
            />,
            <div class="og-input__indicator"></div>
        ];
    }
}
