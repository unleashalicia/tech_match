import back from '../images/hoyleback.jpg';
import images from './card_images';

export default images.map(front => ({front, back, flipped: false}));