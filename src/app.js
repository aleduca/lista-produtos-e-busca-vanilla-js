import { search } from './selectors';
import { searchInkeyUp } from './filter';
import { renderListAndHeader } from './render';
import { removeProduct } from './remove';
import products from './products';
import _ from 'lodash';

search.addEventListener('keyup', _.debounce(searchInkeyUp, 400));

document.body.addEventListener('click', function (event) {
	event.preventDefault();

	const productId = event.target.getAttribute('data-remove');
	if (productId) {
		removeProduct(productId);
	}
});

renderListAndHeader(products);
