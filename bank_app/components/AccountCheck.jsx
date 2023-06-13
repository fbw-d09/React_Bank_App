import React from 'react';

const AccountCheck = ({ balance, transactions }) => {
    const isPositiveBalance = balance >= 0;

    return (
        <div>
            {isPositiveBalance ? (
                <p style={{ color: 'green' }}>Kontostand ist {balance}. Eine Auszahlung ist möglich</p>
            ) : (
                <p style={{ color: 'red' }}>Kontostand ist {balance}. Es ist keine Auszahlung mehr möglich</p>
            )}

            <ul>
                {transactions.map((transaction, index) => (
                    <li key={index} className={transaction.value >= 0 ? 'income' : 'expense'}>
                        {transaction.where}: {transaction.value}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AccountCheck;