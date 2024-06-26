import { NextApiRequest, NextApiResponse } from 'next'
import {Item, Types} from '../../../../app/types'


const ITEM_LIST: Item[] = [
    {
      id: 1,
      name: 'Видеокарта Palit GeForce GTX 1660 SUPER GamingPro [NE6166S018J9-1160A-1]',
      specs: 'AM4, 2 x 3 ГГц, L2 - 1 МБ, 2хDDR4-2400 МГц, AMD Radeon R5, TDP 35 Вт',
      description: 'Видеокарта Palit GeForce GTX 1660 SUPER Gaming Pro [NE6166S018J9-1160A-1] представляет собой производительное решение в ' +
        'компактном корпусе, которое станет отличным выбором для компьютерных систем в миниатюрном корпусе. В основе графического ускорителя ' +
        'используется многоядерный процессор, работающий в широком частотном диапазоне, что вкупе с большим объемом встроенной памяти может ' +
        'обеспечить комфортную работу практически с любыми задачами. Максимальная температура ускорителя при этом может достигать отметки 93°C, ' +
        'для отвода тепла используется несколько осевых вентиляторов.\n' +
        'Графический ускоритель Palit GeForce GTX 1660 SUPER Gaming Pro также отличается строгим дизайном, благодаря чему ' +
        'легко сможет дополнить собой практически любую сборку. Длина данной модели не превышает 235 мм, а толщина – 42 мм, ' +
        'благодаря чему для установки задействуется всего 2 отсека расширения. Для подключения к материнской плате используется ' +
        'интерфейс PCI-E 3.0. Для внешних мониторов на корпусе также предусмотрено несколько видов видеоразъемов.',
      slug: 'videokarta',
      characteristics: [
        {
          country: 'Russian Federation',
          grant: '12',
          type: Types.VideoCard,
        }
      ],
      photos: [
        {
          id: 1,
          photo: 'gtx1660_1.jpg',
        },
        {
          id: 2,
          photo: 'gtx1660_2',
        },
        {
          id: 3,
          photo: 'gtx1660_3',
        },
        {
          id: 4,
          photo: 'gtx1660_4',
        },
        {
          id: 5,
          photo: 'gtx1660_5'
        }
      ],
      price: 1399,
      rating: 2.5,
      brand: 'Palit',
      order_available: 3,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Процессор AMD A6-9500E OEM',
      specs: 'AM4, 2 x 3 ГГц, L2 - 1 МБ, 2хDDR4-2400 МГц, AMD Radeon R5, TDP 35 Вт',
      description: 'Процессор AMD A6-9500 OEM оборудован сокетом AM4 и рассчитан на установку в домашнюю станцию средней мощности или ' +
        'функциональный компьютер офисного, учебного назначения. Обладая базовой тактовой частотой на уровне 3500 МГц, эта двухъядерная ' +
        'модель работает при разгоне по технологии Turbo Core на частоте 3800 МГц. Представленный в комплектации OEM процессор оснащен' +
        ' встроенным графическим ядром GPU Radeon R5, благодаря которому он уверенно справляется с обработкой графических данных.\n' +
        'Процессор AMD A6-9500 OEM совместим с оперативной памятью типа DDR4. Максимально поддерживаемый объем ОЗУ у него составляет 64 ГБ. ' +
        'Модель с тепловыделением не более 65 Вт не нуждается в сложной и мощной системе охлаждения. Производительности этого устройства достаточно ' +
        'для эффективной работы с любым офисным софтом или запуска не самых ресурсоемких приложений и игр.',
      slug: 'prozessor',
      characteristics: [
        {
          country: 'Russian Federation',
          grant: '12',
          type: Types.VideoCard,
        }
      ],
      photos: [
        {
          id: 3,
          photo: 'AMD-RYZEN-5-2600.jpg',
        },
        {
          id: 4,
          photo: 'AMD-RYZEN-5-2600.jpg',
        }
      ],
      price: 1100,
      rating: 1.5,
      brand: 'AMD',
      order_available: 3,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Клавиатура проводная ZET GAMING Blade [K180]',
      specs: 'AM4, 2 x 3 ГГц, L2 - 1 МБ, 2хDDR4-2400 МГц, AMD Radeon R5, TDP 35 Вт',
      description: 'Игровая клавиатура ZET GAMING Blade Kailh Black Optical облачена в белый корпус и' +
        ' дополнена радужной подсветкой с 14 режимами. Так что, кроме высокой функциональности и производительности' +
        ' модель может похвастаться эффектным внешним видом. Оптомеханическая клавиатура оснащена механизмом ' +
        'нажатия Kailh Black Optical и состоит из 104 клавиш, включая дополнительные.\n' +
        'Полноразмерный корпус клавиатуры ZET GAMING Blade Kailh Black Optical изготовлен из металла, за ' +
        'счет чего он на редкость прочен и износоустойчив. К компьютеру модель подключается с использованием ' +
        '1.8-метрового кабеля в тканевой оплетке с USB-коннектором на конце. За счет подставки для рук кистям' +
        ' и предплечьям будет удобно даже при продолжительном игровом сете.',
      slug: 'klaviatura',
      characteristics: [
        {
          country: 'Russian Federation',
          grant: '12',
          type: Types.VideoCard,
        }
      ],
      photos: [
        {
          id: 5,
          photo: 'zet-keyboard.jpg',
        }
      ],
      price: 1699,
      rating: 4.5,
      brand: 'Zet Gaming',
      order_available: 3,
      quantity: 1,
    }
]

export default function handler(req: NextApiRequest, res: NextApiResponse<Item[]>) {
  let currentObject = ITEM_LIST
  const queryParams = req.query
  console.log(queryParams)

  if (queryParams) {
    if (!!queryParams.price) {
      console.log(queryParams)
      const [ start, end ] = (queryParams.price as string).split('-')
      // @ts-ignore
      currentObject = [...currentObject].filter(item => item.price > start && item.price < end)
    }

    if (!!queryParams.sort) {
      if (queryParams.sort === 'name') {
        currentObject.sort((a, b) => (
          a.name > b.name ? 1 : -1
        ))
      } else if (queryParams.sort === '-name') {
        currentObject.sort((a, b) => (
          a.name > b.name ? -1 : 1
        ))
      } else if (queryParams.sort === 'price') {
        currentObject.sort((a, b) => (
          a.price > b.price ? -1 : 1
        ))
      } else if (queryParams.sort === '-price') {
        currentObject.sort((a, b) => (
          a.price > b.price ? 1 : -1
        ))
      }
    }
    res.status(200).json(currentObject)
  } else {
    res.status(200).json(ITEM_LIST)
  }
}