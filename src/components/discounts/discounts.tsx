import {Component, Event, EventEmitter} from '@stencil/core';

@Component({
  tag: 'my-discounts',
  styleUrl: './discounts.scss'
})
export class DiscountsComponent {
  @Event() discountChange: EventEmitter<any>;

  discountValues = {
    vatFree: false,
    discountCode: 0,
  };

  discountChangeTriggered(event) {
    event.preventDefault();
    this.discountChange.emit(this.discountValues);
  }

  render() {
    return (
      <span>
        <form onSubmit={(event) => this.discountChangeTriggered(event)}>
          <div class="form-check">
            <label class="form-check-label">
              <input type="checkbox" checked={this.discountValues.vatFree} class="form-check-input"/>
              VAT free
            </label>
          </div>
          <div class=" form-group mx-sm-3">
            <label htmlfor="discountCode" class=" sr-only">
              Discount code
            </label>
            <input
              type=" text"
              class=" form-control"
              id=" discountCode"
              value={this.discountValues.discountCode}
              placeholder=" Discount code"
            />
          </div>
          <button type="submit" class=" btn btn-primary">
            Update
          </button>
        </form>
      </span>
    );
  }
}
