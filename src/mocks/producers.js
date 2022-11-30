import green from '../assets/produtores/green.png'
import salad from '../assets/produtores/salad.png'
import grow from '../assets/produtores/grow.png'
import jennyJack from '../assets/produtores/jenny-jack.png'
import potager from '../assets/produtores/potager.png'


const generateRandomDistance = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export default producer = {
    title: 'Producers',
    producers: [
        {
            name: 'Green',
            image: green,
            distance: `${generateRandomDistance(1, 500)}m`,
            stars: generateRandomDistance(1, 5)
        },
        {
            name: 'Salad',
            image: salad,
            distance: `${generateRandomDistance(1, 500)}m`,
            stars: generateRandomDistance(1, 5)
        },
        {
            name: 'Grow',
            image: grow,
            distance: `${generateRandomDistance(1, 500)}m`,
            stars: generateRandomDistance(1, 5)
        },
        {
            name: 'Jenny Jack',
            image: jennyJack,
            distance: `${generateRandomDistance(1, 500)}m`,
            stars: generateRandomDistance(1, 5)
        },
        {
            name: 'Potager',
            image: potager,
            distance: `${generateRandomDistance(1, 500)}m`,
            stars: generateRandomDistance(1, 5)
        },
    ]
}