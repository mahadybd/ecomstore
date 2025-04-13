import { cn } from "@/lib/utils";

const ProductPrice = ({ value, className }: { value: number, className?: string }) => {
  const stringValue = value.toFixed(2);
  const [intValue, floadtValue] = stringValue.split('.');
  return (
    <p className={cn('text-2xl', className)}>
      <span className="text-xs align-super">$</span>
      {intValue}
      <span className="text-xs align-super">.{floadtValue}</span>
    </p>
  )
}

export default ProductPrice;