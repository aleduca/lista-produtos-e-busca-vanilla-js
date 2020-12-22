import products from './products';
import { productsFilterInSearch } from './filter';
import { renderListAndHeader } from './render';
import { search } from './selectors';

export function removeProduct(productId) {
    const index = products.findIndex((product) => {
        return +product.id === +productId;
    });

    products.splice(index, 1);

    if (search.value !== '') {
        const productFiltered = productsFilterInSearch(search.value);
        renderListAndHeader(productFiltered);
        if (productFiltered.length == 0) {
            search.value = '';
        }
        return;
    }

    renderListAndHeader(products);
}
