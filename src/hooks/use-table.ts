import { Ref, reactive, ref } from 'vue'
import { LocationQueryValue } from 'vue-router'

import { Pager } from '~/models/base'

export type fetchDataFn = (
  page?: string | number | LocationQueryValue[],
  size?: number,
) => Promise<void>
export const useRemoteTableFetching = <T = any>(
  fetchDataFn: (data: Ref<T[]>, pager: Ref<Pager>) => fetchDataFn,
) => {
  const data: Ref<T[]> = ref<T[]>([]) as any
  const pager = ref<Pager>({} as any)
  const sortProps = reactive({
    sortBy: '',
    sortOrder: 0,
  })
  const checkedRowKeys = ref<string[]>([])

  return {
    data,
    pager,
    sortProps,
    checkedRowKeys,
    fetchDataFn: fetchDataFn(data, pager),
  }
}
