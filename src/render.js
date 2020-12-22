import products from './products';
import { formatter } from '../helpers/format';
import { listContainer } from './selectors';

export function renderListAndHeader(products) {
    render(products);
    renderHeader(products);
}

export function render(products) {
    let list = '';

    if (products.length <= 0) {
        list += `<div id="no-products">Nenhum produto disponível</div>`;
    } else {
        products.forEach((product) => {
            list += `
                <div class="product">
                    <div class="product-image">
                      <img src="assets/images/${product.poster}" alt="">
                    </div>
                    ${product.title} - ${formatter.format(product.price)}
                    <a href="#">
                        <div class="product-button" data-remove="${product.id}">
                            Remove
                        </div>
                    </a>
                </div>
            `;
        });
    }

    listContainer.innerHTML = list;
}

export function renderHeader(products) {
    const totalProducts = products.length;

    header.innerHTML =
        totalProducts > 0
            ? `${totalProducts} produtos disponíveis`
            : '0 produtos disponíveis';
}
