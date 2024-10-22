interface IProps {
    amount: number, 
    asCurrency?: boolean
}

export const formatNumberAndCurrency = ({ amount  , asCurrency} : IProps) => {
    const item = amount.toLocaleString();

    if ( asCurrency) {
        const formatCurrency = new Intl.NumberFormat('en-Us' , {
            style: 'currency',
            currency: 'USD'
        } ).format(amount);
        return formatCurrency
    }

    return item;
}