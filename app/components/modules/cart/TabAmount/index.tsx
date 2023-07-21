import React from 'react'
import { useRouter } from 'next/router'

import styles from '../cart.module.css'
import { useTypesSelector } from '../../../../hooks/useTypedSelector'

export interface Props {
  isCheck: any[];
}


export default function TabAmount({ isCheck }: Props) {
  const { cartItems } = useTypesSelector(state => state.user)
  const router = useRouter()

  const goodsName = isCheck.length > 1  ? 'товара' : 'товар'

  return (
    <div className={styles.totalSumBlock}>
      <div>
        <div style={{ fontSize: '24px'}}>Детали заказа</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}>
        <div>
          <div style={{ fontSize: '12px', color: '#8c8c8c' }}>Итого</div>
          <div>{isCheck.reduce((accumulator, item) => accumulator + item.quantity, 0)} {goodsName}</div>
        </div>
          <div>{isCheck.reduce((accumulator, item) => accumulator + item.quantity * item.price, 0)}₽</div>
      </div>
      </div>
        <div className={styles.continueButton} onClick={() => router.push('/route/order/')}>
          <p className={styles.continueButtonText}>Перейти к оформлению</p>
        </div>
    </div>
  )
}